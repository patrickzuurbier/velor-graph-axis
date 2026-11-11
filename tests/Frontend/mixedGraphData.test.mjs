import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import ts from 'typescript';

const source = readFileSync(
    new URL('../../resources/js/renderers/mixedGraphData.ts', import.meta.url),
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
    isMixedGraphData,
    mixedSeriesOptions,
    mixedUsesSecondaryAxis,
} = await import(moduleUrl);

const data = {
    categories: ['January', 'February'],
    series: [
        {
            key: 'visitors',
            label: 'Visitors',
            values: [1200, 1450],
            type: 'bar',
            axis: 'primary',
            stack: null,
        },
        {
            key: 'conversion',
            label: 'Conversion',
            values: [3.2, 3.8],
            type: 'line',
            axis: 'secondary',
            stack: null,
        },
    ],
    primaryAxisLabel: 'Visitors',
    secondaryAxisLabel: 'Conversion (%)',
};

test('validates mixed line and bar data', () => {
    assert.equal(isMixedGraphData(data), true);
    assert.equal(isMixedGraphData({ ...data, categories: [1] }), false);
    assert.equal(isMixedGraphData({
        ...data,
        series: [{ ...data.series[1], stack: 'invalid-line-stack' }],
    }), false);
});

test('detects secondary value-axis usage', () => {
    assert.equal(mixedUsesSecondaryAxis(data.series), true);
    assert.equal(mixedUsesSecondaryAxis([data.series[0]]), false);
});

test('maps line and bar series to their value axes', () => {
    assert.deepEqual(mixedSeriesOptions(data.series), [
        {
            type: 'bar',
            id: 'visitors',
            name: 'Visitors',
            data: [1200, 1450],
            yAxisIndex: 0,
            emphasis: { focus: 'series' },
            stack: undefined,
        },
        {
            type: 'line',
            id: 'conversion',
            name: 'Conversion',
            data: [3.2, 3.8],
            yAxisIndex: 1,
            emphasis: { focus: 'series' },
            showSymbol: false,
            smooth: true,
        },
    ]);
});
