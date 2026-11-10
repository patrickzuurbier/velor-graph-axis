export interface GraphRenderer {
    render(data: unknown, controls: Readonly<Record<string, string>>): void;
    resize(): void;
    dispose(): void;
}

export type GraphRendererFactory = (element: HTMLElement) => GraphRenderer;

export interface GraphRendererRegistration {
    type: string;
    version: number;
    load: () => Promise<GraphRendererFactory>;
}

declare global {
    interface Window {
        velorGraphRenderers?: GraphRendererRegistration[];
    }
}
