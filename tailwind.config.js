/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'primary-1': '#FCB040',
      'primary-light': '#F3BE70',
      'primary-dark': '#B66D00',
      'gradient-1': '#9A5F06',
      'gradient-2': '#BF921F',
      'gradient-3': '#E4D395',
      'dark-brown': '#5F3808',
      'light-brown': '#A77327',
      dark: '#001533',
      highlighter: '#FFE5AB',
      gray: '#8F9198',
    },
  },
  plugins: [],
};
