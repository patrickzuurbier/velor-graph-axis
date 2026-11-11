import type { BarSeriesOption, LineSeriesOption } from 'echarts/charts';

type MixedSeriesType = 'bar' | 'line';
type MixedValueAxis = 'primary' | 'secondary';

export interface MixedSeriesData {
    key: string;
    label: string;
    values: Array<number | null>;
    type: MixedSeriesType;
    axis: MixedValueAxis;
    stack: string | null;
}

export interface MixedGraphData {
    categories: string[];
    series: MixedSeriesData[];
    primaryAxisLabel: string | null;
    secondaryAxisLabel: string | null;
}

export function isMixedGraphData(data: unknown): data is MixedGraphData {
    if (typeof data !== 'object'
        || data === null
        || ! ('categories' in data)
        || ! ('series' in data)
        || ! ('primaryAxisLabel' in data)
        || ! ('secondaryAxisLabel' in data)
        || (data.primaryAxisLabel !== null && typeof data.primaryAxisLabel !== 'string')
        || (data.secondaryAxisLabel !== null && typeof data.secondaryAxisLabel !== 'string')) {
        return false;
    }

    const categories = data.categories;

    if (! Array.isArray(categories) || ! categories.every((category: unknown) => typeof category === 'string')) {
        return false;
    }

    return Array.isArray(data.series) && data.series.every((series: unknown) => {
        if (typeof series !== 'object'
            || series === null
            || ! ('key' in series)
            || typeof series.key !== 'string'
            || ! ('label' in series)
            || typeof series.label !== 'string'
            || ! ('values' in series)
            || ! Array.isArray(series.values)
            || ! ('type' in series)
            || (series.type !== 'bar' && series.type !== 'line')
            || ! ('axis' in series)
            || (series.axis !== 'primary' && series.axis !== 'secondary')
            || ! ('stack' in series)
            || (series.stack !== null && typeof series.stack !== 'string')
            || (series.type === 'line' && series.stack !== null)) {
            return false;
        }

        return series.values.length === categories.length
            && series.values.every((value: unknown) => typeof value === 'number' || value === null);
    });
}

export function mixedUsesSecondaryAxis(seriesCollection: MixedSeriesData[]): boolean {
    return seriesCollection.some(series => series.axis === 'secondary');
}

export function mixedSeriesOptions(
    seriesCollection: MixedSeriesData[],
): Array<BarSeriesOption | LineSeriesOption> {
    return seriesCollection.map((series): BarSeriesOption | LineSeriesOption => {
        const shared = {
            id: series.key,
            name: series.label,
            data: series.values,
            yAxisIndex: series.axis === 'secondary' ? 1 : 0,
            emphasis: { focus: 'series' as const },
        };

        if (series.type === 'line') {
            return {
                ...shared,
                type: 'line',
                showSymbol: false,
                smooth: true,
            };
        }

        return {
            ...shared,
            type: 'bar',
            stack: series.stack ?? undefined,
        };
    });
}
