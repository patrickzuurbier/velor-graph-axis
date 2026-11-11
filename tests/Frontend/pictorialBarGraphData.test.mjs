import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import ts from 'typescript';

const source = readFileSync(
    new URL('../../resources/js/renderers/pictorialBarGraphData.ts', import.meta.url),
    'utf8',
);
const compiled = ts.transpileModule(source, {
    compilerOptions: {
        module: ts.ModuleKind.ESNext,
        target: ts.ScriptTarget.ES2022,
    },
});
const moduleUrl = `data:text/javascript;base64,${Buffer.from(compiled.outputText).toString('base64')}`;
const {
    isPictorialBarGraphData,
    pictorialBarMaximum,
    pictorialBarSeriesOptions,
} = await import(moduleUrl);

const data = {
    categories: ['Monday', 'Tuesday'],
    series: [{
        key: 'visitors',
        label: 'Visitors',
        values: [7, 9],
        symbol: 'rounded-rectangle',
        mode: 'repeated',
    }],
    orientation: 'vertical',
};

test('validates pictorial bar graph presentation data', () => {
    assert.equal(isPictorialBarGraphData(data), true);
    assert.equal(isPictorialBarGraphData({ ...data, orientation: 'diagonal' }), false);
    assert.equal(isPictorialBarGraphData({
        ...data,
        series: [{ ...data.series[0], symbol: 'image' }],
    }), false);
});

test('calculates the shared symbol boundary', () => {
    assert.equal(pictorialBarMaximum(data), 9);
    assert.equal(pictorialBarMaximum({ ...data, series: [] }), 0);
});

test('maps repeated Velor symbols to pictorial bar options', () => {
    assert.deepEqual(pictorialBarSeriesOptions(data), [{
        type: 'pictorialBar',
        id: 'visitors',
        name: 'Visitors',
        data: [7, 9],
        symbol: 'roundRect',
        symbolBoundingData: 9,
        symbolClip: true,
        symbolMargin: 4,
        symbolRepeat: true,
        symbolSize: 16,
        emphasis: { focus: 'series' },
    }]);
});

test('maps scaled Velor symbols to pictorial bar options', () => {
    const scaled = {
        ...data,
        series: [{ ...data.series[0], symbol: 'rectangle', mode: 'scaled' }],
    };

    assert.deepEqual(pictorialBarSeriesOptions(scaled), [{
        type: 'pictorialBar',
        id: 'visitors',
        name: 'Visitors',
        data: [7, 9],
        symbol: 'rect',
        symbolBoundingData: 9,
        symbolClip: false,
        symbolMargin: undefined,
        symbolRepeat: false,
        symbolSize: ['60%', '100%'],
        emphasis: { focus: 'series' },
    }]);
});
