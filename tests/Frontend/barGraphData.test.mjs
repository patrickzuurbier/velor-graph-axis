import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import ts from 'typescript';

const source = readFileSync(
    new URL('../../resources/js/renderers/barGraphData.ts', import.meta.url),
    'utf8',
);
const compiled = ts.transpileModule(source, {
    compilerOptions: {
        module: ts.ModuleKind.ESNext,
        target: ts.ScriptTarget.ES2022,
    },
});
const moduleUrl = `data:text/javascript;base64,${Buffer.from(compiled.outputText).toString('base64')}`;
const { barAxisConfiguration, barSeriesOptions, isBarGraphData } = await import(moduleUrl);

const data = {
    categories: ['Q1', 'Q2'],
    series: [{ key: 'online', label: 'Online', values: [60, 55], stack: 'sales' }],
    orientation: 'horizontal',
    valueMode: 'percentage',
};

test('validates bar graph data and matching category lengths', () => {
    assert.equal(isBarGraphData(data), true);
    assert.equal(isBarGraphData({ ...data, orientation: 'diagonal' }), false);
    assert.equal(isBarGraphData({
        ...data,
        series: [{ key: 'online', label: 'Online', values: [60], stack: 'sales' }],
    }), false);
});

test('maps grouped and stacked bar series to renderer options', () => {
    assert.deepEqual(barSeriesOptions([
        { key: 'online', label: 'Online', values: [60, 55], stack: 'sales' },
        { key: 'retail', label: 'Retail', values: [40, 45], stack: null },
    ]), [
        {
            type: 'bar',
            id: 'online',
            name: 'Online',
            data: [60, 55],
            stack: 'sales',
            emphasis: { focus: 'series' },
        },
        {
            type: 'bar',
            id: 'retail',
            name: 'Retail',
            data: [40, 45],
            stack: undefined,
            emphasis: { focus: 'series' },
        },
    ]);
});

test('maps horizontal percentage presentation to axis configuration', () => {
    assert.deepEqual(barAxisConfiguration(data), {
        horizontal: true,
        maximum: 100,
        formatter: '{value}%',
    });
    assert.deepEqual(barAxisConfiguration({ ...data, orientation: 'vertical', valueMode: 'value' }), {
        horizontal: false,
        maximum: undefined,
        formatter: undefined,
    });
});
