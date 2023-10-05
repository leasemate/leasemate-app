import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel({
            input: [

                'node_modules/dropzone/dist/min/dropzone.min.js',

                // Theme Js
                'resources/js/head.js',
                'resources/js/config.js',
                // 'resources/js/MyApp.js',
                'resources/js/app.js',


                // Code Highlight Js
                // 'resources/js/konrix/highlight.js',
            ],
            refresh: true
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
});
