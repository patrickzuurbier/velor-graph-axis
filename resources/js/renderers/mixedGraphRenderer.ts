import type { BarSeriesOption, LineSeriesOption } from 'echarts/charts';
import { BarChart, LineChart } from 'echarts/charts';
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
import { isMixedGraphData, mixedSeriesOptions, mixedUsesSecondaryAxis } from './mixedGraphData';

type MixedGraphOption = ComposeOption<
    BarSeriesOption
    | LineSeriesOption
    | GridComponentOption
    | LegendComponentOption
    | TooltipComponentOption
>;

use([BarChart, LineChart, GridComponent, LegendComponent, TooltipComponent, CanvasRenderer]);

class MixedGraphRenderer implements GraphRenderer {
    private readonly chart: ECharts;

    public constructor(element: HTMLElement) {
        this.chart = init(element, undefined, { renderer: 'canvas' });
    }

    public render(data: unknown): void {
        if (! isMixedGraphData(data)) {
            throw new Error('The mixed graph data is invalid.');
        }

        const styles = getComputedStyle(document.documentElement);
        const textColor = styles.getPropertyValue('--bs-body-color').trim() || '#212529';
        const borderColor = styles.getPropertyValue('--cms-border').trim() || '#dee2e6';
        const surfaceColor = styles.getPropertyValue('--cms-surface').trim() || '#ffffff';
        const secondaryAxis = mixedUsesSecondaryAxis(data.series);
        const valueAxis = (name: string | null, position: 'left' | 'right') => ({
            type: 'value' as const,
            name: name ?? undefined,
            position,
            nameTextStyle: { color: textColor },
            axisLabel: { color: textColor },
            axisLine: { show: true, lineStyle: { color: borderColor } },
            splitLine: { show: position === 'left', lineStyle: { color: borderColor } },
        });
        const option: MixedGraphOption = {
            animationDuration: 350,
            color: ['#457b9d', '#e76f51', '#2a9d8f', '#e9c46a'],
            grid: {
                top: 48,
                right: secondaryAxis ? 52 : 24,
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
            xAxis: {
                type: 'category',
                data: data.categories,
                axisLabel: { color: textColor },
                axisLine: { lineStyle: { color: borderColor } },
            },
            yAxis: secondaryAxis
                ? [valueAxis(data.primaryAxisLabel, 'left'), valueAxis(data.secondaryAxisLabel, 'right')]
                : valueAxis(data.primaryAxisLabel, 'left'),
            series: mixedSeriesOptions(data.series),
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

export const createMixedGraphRenderer: GraphRendererFactory = element => new MixedGraphRenderer(element);
