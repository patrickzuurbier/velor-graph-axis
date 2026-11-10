import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        emptyOutDir: true,
        lib: {
            entry: fileURLToPath(new URL('./resources/js/cms.ts', import.meta.url)),
            formats: ['es'],
        },
        rollupOptions: {
            output: {
                entryFileNames: 'cms.js',
                chunkFileNames: 'assets/[name]-[hash].js',
            },
        },
    },
});
