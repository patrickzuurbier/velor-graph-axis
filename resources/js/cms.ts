import type { GraphRendererRegistration } from './types';

const registrations: GraphRendererRegistration[] = [
    {
        type: 'axis.bar',
        version: 1,
        load: async () => {
            const { createBarGraphRenderer } = await import('./renderers/barGraphRenderer');

            return createBarGraphRenderer;
        },
    },
    {
        type: 'axis.line',
        version: 1,
        load: async () => {
            const { createLineGraphRenderer } = await import('./renderers/lineGraphRenderer');

            return createLineGraphRenderer;
        },
    },
];

window.velorGraphRenderers ??= [];

for (const registration of registrations) {
    if (! window.velorGraphRenderers.some(candidate => (
        candidate.type === registration.type && candidate.version === registration.version
    ))) {
        window.velorGraphRenderers.push(registration);
    }
}
