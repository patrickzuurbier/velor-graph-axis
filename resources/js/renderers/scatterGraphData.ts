import type { ScatterSeriesOption } from 'echarts/charts';

export interface ScatterPointData {
    x: number;
    y: number;
    size: number | null;
    label: string | null;
}

export interface ScatterSeriesData {
    key: string;
    label: string;
    points: ScatterPointData[];
}

export interface ScatterGraphData {
    series: ScatterSeriesData[];
    xAxisLabel: string | null;
    yAxisLabel: string | null;
}

interface ScatterSizeRange {
    minimum: number;
    maximum: number;
}

export function isScatterGraphData(data: unknown): data is ScatterGraphData {
    if (typeof data !== 'object'
        || data === null
        || ! ('series' in data)
        || ! ('xAxisLabel' in data)
        || ! ('yAxisLabel' in data)
        || (data.xAxisLabel !== null && typeof data.xAxisLabel !== 'string')
        || (data.yAxisLabel !== null && typeof data.yAxisLabel !== 'string')) {
        return false;
    }

    return Array.isArray(data.series) && data.series.every((series: unknown) => {
        if (typeof series !== 'object'
            || series === null
            || ! ('key' in series)
            || typeof series.key !== 'string'
            || ! ('label' in series)
            || typeof series.label !== 'string'
            || ! ('points' in series)
            || ! Array.isArray(series.points)) {
            return false;
        }

        return series.points.every((point: unknown) => (
            typeof point === 'object'
            && point !== null
            && 'x' in point
            && typeof point.x === 'number'
            && 'y' in point
            && typeof point.y === 'number'
            && 'size' in point
            && (point.size === null || (typeof point.size === 'number' && point.size >= 0))
            && 'label' in point
            && (point.label === null || typeof point.label === 'string')
        ));
    });
}

export function scatterSizeRange(seriesCollection: ScatterSeriesData[]): ScatterSizeRange | null {
    const sizes = seriesCollection
        .flatMap(series => series.points)
        .map(point => point.size)
        .filter((size): size is number => size !== null);

    if (sizes.length === 0) {
        return null;
    }

    return {
        minimum: Math.min(...sizes),
        maximum: Math.max(...sizes),
    };
}

export function scatterSymbolSize(size: number | null, range: ScatterSizeRange | null): number {
    if (size === null || range === null) {
        return 12;
    }

    if (range.minimum === range.maximum) {
        return 24;
    }

    return 10 + ((size - range.minimum) / (range.maximum - range.minimum)) * 30;
}

export function scatterSeriesOptions(seriesCollection: ScatterSeriesData[]): ScatterSeriesOption[] {
    const range = scatterSizeRange(seriesCollection);

    return seriesCollection.map((series): ScatterSeriesOption => ({
        type: 'scatter',
        id: series.key,
        name: series.label,
        data: series.points.map(point => ({
            name: point.label ?? undefined,
            value: [point.x, point.y, point.size],
        })),
        symbolSize: value => scatterSymbolSize(
            Array.isArray(value) && typeof value[2] === 'number' ? value[2] : null,
            range,
        ),
        emphasis: { focus: 'series' },
    }));
}
