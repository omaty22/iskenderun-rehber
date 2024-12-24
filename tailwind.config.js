/** @type {import('tailwindcss').Config} */

import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function({ addUtilities }) {
      // إضافة تخصيصات Tailwind هنا إن لزم الأمر
      addUtilities({
        '.example-class': {
          color: 'red',
        },
      });
    }),
  ],
};
