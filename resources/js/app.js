import './bootstrap';
import '../scss/app.scss';
import '../scss/icons.scss';
import '../scss/plugins.scss';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';

import { MyApp, ThemeCustomizer } from './MyApp.js';

// import "@frostui/tailwindcss"
import { initFrost } from "@frostui/tailwindcss";

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props), mounted() {
                initFrost();
                new MyApp().init();
                new ThemeCustomizer().init();
            }
        })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
