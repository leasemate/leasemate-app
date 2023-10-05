import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    mode: 'layers',
    content: [
        "./node_modules/@frostui/tailwindcss/**/*.js",
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/**/*.js',
        './resources/js/**/*.vue',
    ],
    darkMode: ['class', '[data-mode="dark"]'],
    theme: {
        container: {
            center: true,
        },
        fontFamily: {
            'base': ['Inter', 'sans-serif'],
        },
        extend: {
            fontFamily: {
                sans: ['Nunito', 'sans-serif'],
                serif: ['Merriweather', 'serif'],
            },
            colors: {
                'primary': '#3073F1',
                'secondary': '#68625D',
                'success': '#1CB454',
                'warning': '#E2A907',
                'info': '#0895D8',
                'danger': '#E63535',
                'light': '#eef2f7',
                'dark': '#313a46',
                gray: {
                    50:  '#f8f7ff',
                    100: '#f6f5ff',
                    200:  '#eff0fe',
                    300:  '#e0e0fc',
                    400:  '#98A5C0',
                    500:  '#84848f',
                    600:  '#595983',
                    700:  '#1e1f48',
                    800:  '#141430',
                    900:  '#0a0a18',
                    950:  '#050329'
                },
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
    variants: {
        extend: {
            backgroundOpacity: ['dark']
        }
    },
    plugins: [
        forms,
        require('@frostui/tailwindcss/plugin'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
    ],
};
