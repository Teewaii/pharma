/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        heroBkg: "url('../../src/assets/herobgk2.png')",
      },
      colors: {
        primary1: "#0152A8",
        primary2: "#0FE3AF",
        primary3: "#143450",
        secondary1: "#DCEDFE",
        secondary2: "#E5F2EF",
        secondary3: "#F1F1F1",
        HeaderColor: "#1C1C1C",
        paragraphColor: "#545454",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
          xl: "7rem",
          "2xl": "5rem",
        },

        center: true,
      },
      spacing: {
        13: "18.5rem",
        36: "4.6rem",
      },
      letterSpacing: {
        spread: "0.25rem",
      },
      fontSize: {
        heroHeaderXl: "50px",
      },
    },
  },
  plugins: [],
};
