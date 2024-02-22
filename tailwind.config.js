import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

const { bottom } = require('@popperjs/core')
const plugin = require('tailwindcss/plugin')
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/**/*.js',
        './resources/js/**/*.vue',
    ],
    darkMode: ['class', '[data-mode="dark"]'],

    theme: {
        screens: {
            xs: "100%",
            sm: '540px',
            md: '720px	',
            lg: '960px',
            xl: '1140px',
            '2xl': '1320px',
        },
        container: {
            padding: '0.625rem',
        },
        fontFamily: {
            primary: ['IBM Plex Sans', 'sans-serif'],
        },
        extend: {
            fontSize: {
                '10': '0.625rem',
                '11': '0.688rem',
                '13': '0.813rem',
                base: '0.875rem',
                '15': '0.938rem',
                '16': '1rem',
                '17': '1.063rem',
                '19': '1.188rem',
                '21': '1.313rem',
                '22': '1.375rem',
            },
            colors: {
                'primary-0': 'rgb(var(--primary-0))',
                'primary-50': 'rgb(var(--primary-50))',
                'primary-100': 'rgb(var(--primary-100))',
                'primary-200': 'rgb(var(--primary-200))',
                'primary-300': 'rgb(var(--primary-300))',
                'primary-400': 'rgb(var(--primary-400))',
                'primary-500': 'rgb(var(--primary-500))',
                'primary-600': 'rgb(var(--primary-600))',
                'primary-700': 'rgb(var(--primary-700))',
                'primary-800': 'rgb(var(--primary-800))',
                'primary-900': 'rgb(var(--primary-900))',
                'primary-950': 'rgb(var(--primary-950))',
                'surface-0': 'rgb(var(--surface-0))',
                'surface-50': 'rgb(var(--surface-50))',
                'surface-100': 'rgb(var(--surface-100))',
                'surface-200': 'rgb(var(--surface-200))',
                'surface-300': 'rgb(var(--surface-300))',
                'surface-400': 'rgb(var(--surface-400))',
                'surface-500': 'rgb(var(--surface-500))',
                'surface-600': 'rgb(var(--surface-600))',
                'surface-700': 'rgb(var(--surface-700))',
                'surface-800': 'rgb(var(--surface-800))',
                'surface-900': 'rgb(var(--surface-900))',
                'surface-950': 'rgb(var(--surface-950))'
            },
            animation: {
                loader: "loader 0.6s infinite alternate"
            },
            keyframes: {
                loader: {
                    to: {
                        opacity: 1,
                        transform: "translate3d(0, -1rem, 0)"
                    }
                }
            }
        },
    },
    plugins: [
        forms,
        typography,
        require('@tailwindcss/forms'),
        plugin(function ({ addBase, theme }) {
            addBase({
                'h1': { fontSize: theme('fontSize.4xl'), fontWeight: theme('fontWeight.semibold'), fontFamily: theme('fontFamily.primary') },
                'h2': { fontSize: theme('fontSize.3xl'), fontWeight: theme('fontWeight.semibold'), fontFamily: theme('fontFamily.primary') },
                'h3': { fontSize: theme('fontSize.2xl'), fontWeight: theme('fontWeight.semibold'), fontFamily: theme('fontFamily.primary') },
                'h4': { fontSize: theme('fontSize.xl'), fontWeight: theme('fontWeight.semibold'), fontFamily: theme('fontFamily.primary') },
                'h5': { fontSize: theme('fontSize.lg'), fontWeight: theme('fontWeight.semibold'), fontFamily: theme('fontFamily.primary') },
                'h6': { fontSize: theme('fontSize.base'), fontWeight: theme('fontWeight.semibold'), fontFamily: theme('fontFamily.primary') },
            })
        }),
        plugin(function ({ addComponents, theme }) {
            addComponents({
                '.btn': {
                    padding: '0.4375rem 0.75rem',
                    borderRadius: '0.30rem',
                    fontWeight: theme('fontWeight.normal'),
                    fontSize: '0.875rem',
                    display: 'inline-block',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    textAlign: 'center',
                    transition: 'all 0.5s ease',
                },
                '.card': {
                    borderRadius: '0.30rem',
                    border: '1px',
                    borderStyle: 'solid',
                    borderColor: '#e5e7eb',
                    marginBottom: theme('margin.5')
                },
                '.card-body': {
                    padding: theme('padding.5'),
                }
            })
        })
    ],
};
