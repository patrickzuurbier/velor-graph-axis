import type { ScatterSeriesOption } from 'echarts/charts';
import { ScatterChart } from 'echarts/charts';
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
import { isScatterGraphData, scatterSeriesOptions } from './scatterGraphData';

type ScatterGraphOption = ComposeOption<
    ScatterSeriesOption | GridComponentOption | LegendComponentOption | TooltipComponentOption
>;

use([ScatterChart, GridComponent, LegendComponent, TooltipComponent, CanvasRenderer]);

class ScatterGraphRenderer implements GraphRenderer {
    private readonly chart: ECharts;

    public constructor(element: HTMLElement) {
        this.chart = init(element, undefined, { renderer: 'canvas' });
    }

    public render(data: unknown): void {
        if (! isScatterGraphData(data)) {
            throw new Error('The scatter graph data is invalid.');
        }

        const styles = getComputedStyle(document.documentElement);
        const textColor = styles.getPropertyValue('--bs-body-color').trim() || '#212529';
        const borderColor = styles.getPropertyValue('--cms-border').trim() || '#dee2e6';
        const surfaceColor = styles.getPropertyValue('--cms-surface').trim() || '#ffffff';
        const option: ScatterGraphOption = {
            animationDuration: 350,
            color: ['#457b9d', '#e76f51', '#2a9d8f', '#e9c46a'],
            grid: {
                top: 48,
                right: 24,
                bottom: 44,
                left: 52,
                containLabel: true,
            },
            legend: {
                top: 0,
                textStyle: { color: textColor },
            },
            tooltip: {
                trigger: 'item',
                backgroundColor: surfaceColor,
                borderColor,
                textStyle: { color: textColor },
            },
            xAxis: {
                type: 'value',
                name: data.xAxisLabel ?? undefined,
                nameLocation: 'middle',
                nameGap: 30,
                nameTextStyle: { color: textColor },
                axisLabel: { color: textColor },
                axisLine: { lineStyle: { color: borderColor } },
                splitLine: { lineStyle: { color: borderColor } },
            },
            yAxis: {
                type: 'value',
                name: data.yAxisLabel ?? undefined,
                nameLocation: 'middle',
                nameGap: 40,
                nameTextStyle: { color: textColor },
                axisLabel: { color: textColor },
                axisLine: { lineStyle: { color: borderColor } },
                splitLine: { lineStyle: { color: borderColor } },
            },
            series: scatterSeriesOptions(data.series),
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

export const createScatterGraphRenderer: GraphRendererFactory = element => new ScatterGraphRenderer(element);
