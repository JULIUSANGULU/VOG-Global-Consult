import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'primary-50': '#e9ede9',
                'primary-100': '#bcc8bc',
                'primary-200': '#9bae9b',
                'primary-300': '#6e886e',
                'primary-400': '#517151',
                'primary-500': '#264e26',
                'primary-600': '#234723',
                'primary-700': '#1b371b',
                'primary-800': '#152b15',
                'secondary-50': '#e6edee',
                'secondary-100': '#b1c8c9',
                'secondary-200': '#8badaf',
                'secondary-300': '#55888b',
                'secondary-400': '#357175',
                'secondary-500': '#024d52',
                'secondary-600': '#02464b',
                'secondary-700': '#01373a',
                'secondary-800': '#012a2d',
                'secondary-900': '#012a2d'

            },
        },
    },

    plugins: [forms],
};
