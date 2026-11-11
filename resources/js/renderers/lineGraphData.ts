import type { LineSeriesOption } from 'echarts/charts';

export interface LineSeriesData {
    key: string;
    label: string;
    values: Array<number | null>;
}

export interface LineGraphData {
    categories: string[];
    series: LineSeriesData[];
}

export function isLineGraphData(data: unknown): data is LineGraphData {
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

export function lineSeriesOptions(seriesCollection: LineSeriesData[]): LineSeriesOption[] {
    return seriesCollection.map((series): LineSeriesOption => ({
        type: 'line',
        id: series.key,
        name: series.label,
        data: series.values,
        showSymbol: false,
        smooth: true,
        emphasis: { focus: 'series' },
    }));
}

export function yAxisType(controls: Readonly<Record<string, string>>): 'log' | 'value' {
    return controls.scale === 'logarithmic' ? 'log' : 'value';
}
