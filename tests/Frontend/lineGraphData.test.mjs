import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import ts from 'typescript';

const source = readFileSync(
    new URL('../../resources/js/renderers/lineGraphData.ts', import.meta.url),
    'utf8',
);
const compiled = ts.transpileModule(source, {
    compilerOptions: {
        module: ts.ModuleKind.ESNext,
        target: ts.ScriptTarget.ES2022,
    },
});
const moduleUrl = `data:text/javascript;base64,${Buffer.from(compiled.outputText).toString('base64')}`;
const { isLineGraphData, lineSeriesOptions, yAxisType } = await import(moduleUrl);

test('validates categories, series values, and matching lengths', () => {
    assert.equal(isLineGraphData({
        categories: ['January', 'February'],
        series: [{ key: 'revenue', label: 'Revenue', values: [1200, null] }],
    }), true);
    assert.equal(isLineGraphData({
        categories: ['January', 'February'],
        series: [{ key: 'revenue', label: 'Revenue', values: [1200] }],
    }), false);
    assert.equal(isLineGraphData({ categories: [1], series: [] }), false);
});

test('maps line series to renderer options', () => {
    assert.deepEqual(lineSeriesOptions([
        { key: 'revenue', label: 'Revenue', values: [1200, 1450] },
    ]), [{
        type: 'line',
        id: 'revenue',
        name: 'Revenue',
        data: [1200, 1450],
        showSymbol: false,
        smooth: true,
        emphasis: { focus: 'series' },
    }]);
});

test('uses a logarithmic axis only when explicitly selected', () => {
    assert.equal(yAxisType({ scale: 'logarithmic' }), 'log');
    assert.equal(yAxisType({ scale: 'linear' }), 'value');
    assert.equal(yAxisType({}), 'value');
});
