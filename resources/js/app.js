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
// import Tooltip from 'primevue/tooltip';

import Wind from "./presets/wind";
import filters from "./filters";
import * as dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime.js"
import en from "dayjs/locale/en.js"

dayjs.extend(relativeTime)
dayjs.locale(en)

const appName = import.meta.env.VITE_APP_NAME || "Laravel";
const pinia = createPinia();

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {

        const app = createApp({ render: () => h(App, props) });

        app.config.globalProperties.filters = filters;
        app.config.globalProperties.dayjs = dayjs;

        // app.directive('tooltip', Tooltip);

        return app.use(plugin)
            .use(pinia)
            .use(ZiggyVue, Ziggy)
            .use(PrimeVue, {
                unstyled: false,
                pt: Wind
            })
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
