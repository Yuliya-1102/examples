import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig({
    build: {
        rollupOptions: {
            output: {
                dir: './dist/',
                entryFileNames: 'app-editor-desiner.js',
                assetFileNames: 'style.css',
                manualChunks: undefined,
            }
        }
    },
    plugins: [injectHTML()],
});