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

                // 'resources/js/konrix/dashboard.js',
                // 'resources/js/konrix/apps-calendar.js',
                // 'resources/js/konrix/apps-kanban.js',
                // 'resources/js/konrix/extended-animation.js',
                // 'resources/js/konrix/extended-sortable.js',
                // 'resources/js/konrix/extended-plyr.js',
                // 'resources/js/konrix/extended-sweetalert.js',
                // 'resources/js/konrix/extended-swiper.js',
                // 'resources/js/konrix/extended-tippy.js',
                // 'resources/js/konrix/extended-tour.js',
                // 'resources/js/konrix/form-inputmask.js',
                // 'resources/js/konrix/form-fileupload.js',
                // 'resources/js/konrix/form-flatpickr.js',
                // 'resources/js/konrix/extended-ratings.js',
                // 'resources/js/konrix/form-editor.js',
                // 'resources/js/konrix/extended-lightbox.js',
                // 'resources/js/konrix/form-color-pickr.js',
                // 'resources/js/konrix/form-rangeslider.js',
                // 'resources/js/konrix/form-select.js',
                // 'resources/js/konrix/form-validation.js',
                // 'resources/js/konrix/icons-material-symbols.js',
                // 'resources/js/konrix/icons-mingcute.js',
                // 'resources/js/konrix/maps-google.js',
                // 'resources/js/konrix/maps-vector.js',
                // 'resources/js/konrix/gallery.js',
                // 'resources/js/konrix/table-gridjs.js',
                // 'resources/js/konrix/charts-apex.js',

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
