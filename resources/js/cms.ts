import type { GraphRendererRegistration } from './types';

const registration: GraphRendererRegistration = {
    type: 'axis.line',
    version: 1,
    load: async () => {
        const { createLineGraphRenderer } = await import('./renderers/lineGraphRenderer');

        return createLineGraphRenderer;
    },
};

window.velorGraphRenderers ??= [];

if (! window.velorGraphRenderers.some(candidate => (
    candidate.type === registration.type && candidate.version === registration.version
))) {
    window.velorGraphRenderers.push(registration);
}
