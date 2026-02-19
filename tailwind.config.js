/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Essa linha é obrigatória!
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C92071",
      },
    },
  },
  plugins: [],
};
