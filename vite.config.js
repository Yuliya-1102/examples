import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';

const filesHtml = {
    main: resolve(__dirname, 'index.html'),
    pages: resolve(__dirname, 'pages/index.html'),
};

// array.forEach(element => {

// });



export default defineConfig({
    build: {
        rollupOptions: {
            output: {
                dir: './dist/',
                entryFileNames: 'script-new.js',
                assetFileNames: 'style-new.css',
                manualChunks: undefined,
            },
            input: filesHtml
        }
    },
    plugins: [injectHTML()],
});