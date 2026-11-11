import type { PictorialBarSeriesOption } from 'echarts/charts';

type PictorialBarMode = 'repeated' | 'scaled';
type PictorialBarSymbol =
    | 'arrow'
    | 'circle'
    | 'diamond'
    | 'pin'
    | 'rectangle'
    | 'rounded-rectangle'
    | 'triangle';

export interface PictorialBarSeriesData {
    key: string;
    label: string;
    values: Array<number | null>;
    symbol: PictorialBarSymbol;
    mode: PictorialBarMode;
}

export interface PictorialBarGraphData {
    categories: string[];
    series: PictorialBarSeriesData[];
    orientation: 'horizontal' | 'vertical';
}

const symbols: Record<PictorialBarSymbol, string> = {
    arrow: 'arrow',
    circle: 'circle',
    diamond: 'diamond',
    pin: 'pin',
    rectangle: 'rect',
    'rounded-rectangle': 'roundRect',
    triangle: 'triangle',
};

export function isPictorialBarGraphData(data: unknown): data is PictorialBarGraphData {
    if (typeof data !== 'object'
        || data === null
        || ! ('categories' in data)
        || ! ('series' in data)
        || ! ('orientation' in data)) {
        return false;
    }

    const categories = data.categories;
    const seriesCollection = data.series;

    if (! Array.isArray(categories)
        || ! categories.every((category: unknown) => typeof category === 'string')
        || (data.orientation !== 'horizontal' && data.orientation !== 'vertical')) {
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
            || ! ('symbol' in series)
            || typeof series.symbol !== 'string'
            || ! (series.symbol in symbols)
            || ! ('mode' in series)
            || (series.mode !== 'repeated' && series.mode !== 'scaled')) {
            return false;
        }

        return series.values.every((value: unknown) => (
            (typeof value === 'number' && value >= 0) || value === null
        )) && series.values.length === categories.length;
    });
}

export function pictorialBarMaximum(data: PictorialBarGraphData): number {
    const values = data.series.flatMap(series => series.values).filter(value => value !== null);

    return Math.max(0, ...values);
}

export function pictorialBarSeriesOptions(data: PictorialBarGraphData): PictorialBarSeriesOption[] {
    const maximum = pictorialBarMaximum(data);

    return data.series.map((series): PictorialBarSeriesOption => {
        const repeated = series.mode === 'repeated';

        return {
            type: 'pictorialBar',
            id: series.key,
            name: series.label,
            data: series.values,
            symbol: symbols[series.symbol],
            symbolBoundingData: maximum,
            symbolClip: repeated,
            symbolMargin: repeated ? 4 : undefined,
            symbolRepeat: repeated,
            symbolSize: repeated ? 16 : ['60%', '100%'],
            emphasis: { focus: 'series' },
        };
    });
}
