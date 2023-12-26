import "./bootstrap";
import "../scss/icons.scss";
import "../scss/app.scss";


import.meta.glob([
    '../images/**',
]);

import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ZiggyVue } from "../../vendor/tightenco/ziggy/dist/vue.m";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";

import Wind from "./presets/wind";
import filters from "./filters";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";
const pinia = createPinia();

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {

        const app = createApp({ render: () => h(App, props) });

        app.config.globalProperties.filters = filters;

        return app.use(plugin)
            .use(pinia)
            .use(ZiggyVue, Ziggy)
            .use(PrimeVue, {
                unstyled: true,
                pt: Wind
            })
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
