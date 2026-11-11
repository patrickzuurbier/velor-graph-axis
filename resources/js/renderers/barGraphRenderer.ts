import type { BarSeriesOption } from 'echarts/charts';
import { BarChart } from 'echarts/charts';
import type {
    GridComponentOption,
    LegendComponentOption,
    TooltipComponentOption,
} from 'echarts/components';
import { GridComponent, LegendComponent, TooltipComponent } from 'echarts/components';
import type { ComposeOption, ECharts } from 'echarts/core';
import { init, use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import type { GraphRenderer, GraphRendererFactory } from '../types';
import { barAxisConfiguration, barSeriesOptions, isBarGraphData } from './barGraphData';

type BarGraphOption = ComposeOption<
    BarSeriesOption | GridComponentOption | LegendComponentOption | TooltipComponentOption
>;

use([BarChart, GridComponent, LegendComponent, TooltipComponent, CanvasRenderer]);

class BarGraphRenderer implements GraphRenderer {
    private readonly chart: ECharts;

    public constructor(element: HTMLElement) {
        this.chart = init(element, undefined, { renderer: 'canvas' });
    }

    public render(data: unknown): void {
        if (! isBarGraphData(data)) {
            throw new Error('The bar graph data is invalid.');
        }

        const styles = getComputedStyle(document.documentElement);
        const textColor = styles.getPropertyValue('--bs-body-color').trim() || '#212529';
        const borderColor = styles.getPropertyValue('--cms-border').trim() || '#dee2e6';
        const surfaceColor = styles.getPropertyValue('--cms-surface').trim() || '#ffffff';
        const axis = barAxisConfiguration(data);
        const categoryAxis = {
            type: 'category' as const,
            data: data.categories,
            axisLabel: { color: textColor },
            axisLine: { lineStyle: { color: borderColor } },
        };
        const valueAxis = {
            type: 'value' as const,
            max: axis.maximum,
            axisLabel: { color: textColor, formatter: axis.formatter },
            splitLine: { lineStyle: { color: borderColor } },
        };
        const option: BarGraphOption = {
            animationDuration: 350,
            color: ['#457b9d', '#e76f51', '#2a9d8f', '#e9c46a'],
            grid: {
                top: 48,
                right: 24,
                bottom: 32,
                left: 52,
                containLabel: true,
            },
            legend: {
                top: 0,
                textStyle: { color: textColor },
            },
            tooltip: {
                trigger: 'axis',
                backgroundColor: surfaceColor,
                borderColor,
                textStyle: { color: textColor },
            },
            xAxis: axis.horizontal ? valueAxis : categoryAxis,
            yAxis: axis.horizontal ? categoryAxis : valueAxis,
            series: barSeriesOptions(data.series),
        };

        this.chart.setOption(option, true);
    }

    public resize(): void {
        this.chart.resize();
    }

    public dispose(): void {
        this.chart.dispose();
    }
}

export const createBarGraphRenderer: GraphRendererFactory = element => new BarGraphRenderer(element);
