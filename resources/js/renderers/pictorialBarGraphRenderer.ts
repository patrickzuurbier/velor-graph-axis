import type { PictorialBarSeriesOption } from 'echarts/charts';
import { PictorialBarChart } from 'echarts/charts';
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
import {
    isPictorialBarGraphData,
    pictorialBarMaximum,
    pictorialBarSeriesOptions,
} from './pictorialBarGraphData';

type PictorialBarGraphOption = ComposeOption<
    PictorialBarSeriesOption | GridComponentOption | LegendComponentOption | TooltipComponentOption
>;

use([PictorialBarChart, GridComponent, LegendComponent, TooltipComponent, CanvasRenderer]);

class PictorialBarGraphRenderer implements GraphRenderer {
    private readonly chart: ECharts;

    public constructor(element: HTMLElement) {
        this.chart = init(element, undefined, { renderer: 'canvas' });
    }

    public render(data: unknown): void {
        if (! isPictorialBarGraphData(data)) {
            throw new Error('The pictorial bar graph data is invalid.');
        }

        const styles = getComputedStyle(document.documentElement);
        const textColor = styles.getPropertyValue('--bs-body-color').trim() || '#212529';
        const borderColor = styles.getPropertyValue('--cms-border').trim() || '#dee2e6';
        const surfaceColor = styles.getPropertyValue('--cms-surface').trim() || '#ffffff';
        const categoryAxis = {
            type: 'category' as const,
            data: data.categories,
            axisLabel: { color: textColor },
            axisLine: { lineStyle: { color: borderColor } },
        };
        const valueAxis = {
            type: 'value' as const,
            max: pictorialBarMaximum(data),
            axisLabel: { color: textColor },
            splitLine: { lineStyle: { color: borderColor } },
        };
        const horizontal = data.orientation === 'horizontal';
        const option: PictorialBarGraphOption = {
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
            xAxis: horizontal ? valueAxis : categoryAxis,
            yAxis: horizontal ? categoryAxis : valueAxis,
            series: pictorialBarSeriesOptions(data),
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

export const createPictorialBarGraphRenderer: GraphRendererFactory = element => (
    new PictorialBarGraphRenderer(element)
);
