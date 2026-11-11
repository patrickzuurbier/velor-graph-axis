import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import ts from 'typescript';

const source = readFileSync(
    new URL('../../resources/js/renderers/scatterGraphData.ts', import.meta.url),
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
    isScatterGraphData,
    scatterSeriesOptions,
    scatterSizeRange,
    scatterSymbolSize,
} = await import(moduleUrl);

const data = {
    series: [{
        key: 'search',
        label: 'Search',
        points: [
            { x: 12, y: 42, size: 100, label: 'Spring' },
            { x: 19, y: 58, size: 300, label: null },
        ],
    }],
    xAxisLabel: 'Budget',
    yAxisLabel: 'Reach',
};

test('validates scatter and bubble data', () => {
    assert.equal(isScatterGraphData(data), true);
    assert.equal(isScatterGraphData({ ...data, xAxisLabel: 1 }), false);
    assert.equal(isScatterGraphData({
        ...data,
        series: [{ ...data.series[0], points: [{ x: 1, y: 2, size: -1, label: null }] }],
    }), false);
});

test('calculates the bubble size range', () => {
    assert.deepEqual(scatterSizeRange(data.series), { minimum: 100, maximum: 300 });
    assert.equal(scatterSizeRange([{ ...data.series[0], points: [] }]), null);
});

test('scales bubble values while keeping plain points stable', () => {
    const range = scatterSizeRange(data.series);

    assert.equal(scatterSymbolSize(100, range), 10);
    assert.equal(scatterSymbolSize(300, range), 40);
    assert.equal(scatterSymbolSize(null, range), 12);
    assert.equal(scatterSymbolSize(100, { minimum: 100, maximum: 100 }), 24);
});

test('maps scatter series to renderer options', () => {
    const options = scatterSeriesOptions(data.series);

    assert.equal(options[0].type, 'scatter');
    assert.equal(options[0].id, 'search');
    assert.deepEqual(options[0].data, [
        { name: 'Spring', value: [12, 42, 100] },
        { name: undefined, value: [19, 58, 300] },
    ]);
    assert.equal(options[0].symbolSize([12, 42, 100]), 10);
    assert.equal(options[0].symbolSize([19, 58, 300]), 40);
});
