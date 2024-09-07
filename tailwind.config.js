const { background } = require('@chakra-ui/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#EEE7F6',
          secondary: '#7191E6',
          tertiary: '#EEE7F6',
        },
        primary: '#EEE7F6',
        secondary: '#7191E6',
        tertiary: '#EEE7F6',
        accent: '#3D52A1',
        miniText: '#1A202C',
      },
    },
    boxShadow: {
      'xl': 'rgba(191, 209, 250, 0.6) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
    },
  },
  plugins: [],
};
