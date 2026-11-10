import type { LineSeriesOption } from 'echarts/charts';
import { LineChart } from 'echarts/charts';
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

type LineGraphOption = ComposeOption<
    LineSeriesOption | GridComponentOption | LegendComponentOption | TooltipComponentOption
>;

interface LineSeriesData {
    key: string;
    label: string;
    values: Array<number | null>;
}

interface LineGraphData {
    categories: string[];
    series: LineSeriesData[];
}

use([LineChart, GridComponent, LegendComponent, TooltipComponent, CanvasRenderer]);

class LineGraphRenderer implements GraphRenderer {
    private readonly chart: ECharts;

    public constructor(element: HTMLElement) {
        this.chart = init(element, undefined, { renderer: 'canvas' });
    }

    public render(data: unknown, controls: Readonly<Record<string, string>>): void {
        if (! isLineGraphData(data)) {
            throw new Error('The line graph data is invalid.');
        }

        const styles = getComputedStyle(document.documentElement);
        const textColor = styles.getPropertyValue('--bs-body-color').trim() || '#212529';
        const borderColor = styles.getPropertyValue('--cms-border').trim() || '#dee2e6';
        const surfaceColor = styles.getPropertyValue('--cms-surface').trim() || '#ffffff';
        const option: LineGraphOption = {
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
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: data.categories,
                axisLabel: { color: textColor },
                axisLine: { lineStyle: { color: borderColor } },
            },
            yAxis: {
                type: controls.scale === 'logarithmic' ? 'log' : 'value',
                axisLabel: { color: textColor },
                splitLine: { lineStyle: { color: borderColor } },
            },
            series: data.series.map((series): LineSeriesOption => ({
                type: 'line',
                id: series.key,
                name: series.label,
                data: series.values,
                showSymbol: false,
                smooth: true,
                emphasis: { focus: 'series' },
            })),
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

export const createLineGraphRenderer: GraphRendererFactory = element => new LineGraphRenderer(element);

function isLineGraphData(data: unknown): data is LineGraphData {
    if (typeof data !== 'object' || data === null || ! ('categories' in data) || ! ('series' in data)) {
        return false;
    }

    const categories = data.categories;
    const seriesCollection = data.series;

    if (! Array.isArray(categories) || ! categories.every((category: unknown) => typeof category === 'string')) {
        return false;
    }

    return Array.isArray(seriesCollection) && seriesCollection.every((series: unknown) => {
        if (typeof series !== 'object'
            || series === null
            || ! ('key' in series)
            || typeof series.key !== 'string'
            || ! ('label' in series)
            || typeof series.label !== 'string'
            || ! ('values' in series)
            || ! Array.isArray(series.values)) {
            return false;
        }

        return series.values.every((value: unknown) => typeof value === 'number' || value === null)
            && series.values.length === categories.length;
    });
}
