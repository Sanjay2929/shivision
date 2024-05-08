/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "custom-lg": "440px",
        "custom-xl": "540px",
      },
      fontSize: {
        "custom-xs": "10px",
        "custom-3xl": "32px",
        "custom-4xl": "40px",
        "custom-5xl": "52px",
        "custom-6xl": "64px",
      },
      colors: {
        dark: "#161616",
        orange: "#F58220",
        gray: "#0C0C0C",
      },
      backgroundImage: {
        bg_portfolio: "url('/assets/images/png/detail/portfolio-bg.png')",
        hero: "url('/assets/images/hero/doctor.png')",
      },
      boxShadow: {
        aboutLeftImageShadow: "-20px 20px 0px 0px #FF7500 ",
        aboutSmLeftImageShadow: "-15px 15px 0px 0px #FF7500 ",
        aboutRightImageShadow: "20px 20px 0px 0px #FF7500 ",
        aboutSmRightImageShadow: "15px 15px 0px 0px #FF7500 ",
      },
    },
  },
  plugins: [],
};
