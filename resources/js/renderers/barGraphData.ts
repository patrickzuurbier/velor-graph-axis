import type { BarSeriesOption } from 'echarts/charts';

export interface BarSeriesData {
    key: string;
    label: string;
    values: Array<number | null>;
    stack: string | null;
}

export interface BarGraphData {
    categories: string[];
    series: BarSeriesData[];
    orientation: 'horizontal' | 'vertical';
    valueMode: 'percentage' | 'value';
}

export interface BarAxisConfiguration {
    horizontal: boolean;
    maximum?: number;
    formatter?: string;
}

export function isBarGraphData(data: unknown): data is BarGraphData {
    if (typeof data !== 'object'
        || data === null
        || ! ('categories' in data)
        || ! ('series' in data)
        || ! ('orientation' in data)
        || ! ('valueMode' in data)) {
        return false;
    }

    const categories = data.categories;
    const seriesCollection = data.series;

    if (! Array.isArray(categories)
        || ! categories.every((category: unknown) => typeof category === 'string')
        || (data.orientation !== 'horizontal' && data.orientation !== 'vertical')
        || (data.valueMode !== 'percentage' && data.valueMode !== 'value')) {
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
            || ! Array.isArray(series.values)
            || ! ('stack' in series)
            || (series.stack !== null && typeof series.stack !== 'string')) {
            return false;
        }

        return series.values.every((value: unknown) => typeof value === 'number' || value === null)
            && series.values.length === categories.length;
    });
}

export function barSeriesOptions(seriesCollection: BarSeriesData[]): BarSeriesOption[] {
    return seriesCollection.map((series): BarSeriesOption => ({
        type: 'bar',
        id: series.key,
        name: series.label,
        data: series.values,
        stack: series.stack ?? undefined,
        emphasis: { focus: 'series' },
    }));
}

export function barAxisConfiguration(data: BarGraphData): BarAxisConfiguration {
    return {
        horizontal: data.orientation === 'horizontal',
        maximum: data.valueMode === 'percentage' ? 100 : undefined,
        formatter: data.valueMode === 'percentage' ? '{value}%' : undefined,
    };
}
