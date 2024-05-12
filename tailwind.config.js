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
        darkGray: "#404041",
        silversand: "#C2C2C2",
        stardust: "#9F9F9F",
        darkblack: "#000700",
        fuscousgray: "#4D524D",
      },
      backgroundImage: {
        bg_portfolio: "url('/assets/images/png/detail/portfolio-bg.png')",
        hero: "url('/assets/images/hero/doctor.webp')",
        sheepMilk: "url('/assets/images/hero/sheep-milk.webp')",
        cows: "url('/assets/images/hero/cows.webp')",
        twoCows: "url('/assets/images/hero/two-cows.webp')",
        contact: "url('/assets/images/contact/contact-orange.png')",
        black_linear_line:
          "linear-gradient(180deg, #FFFFFF 0%, #000000 49.55%, #FFFFFF 100%)",
        linear_blog_bottom:
          "linear-gradient(90deg, #FFFFFF 0%, #000000 50.07%, #FFFFFF 100%)",
      },
      boxShadow: {
        aboutLeftImageShadow: "-20px 20px 0px 0px #FF7500 ",
        aboutSmLeftImageShadow: "-15px 15px 0px 0px #FF7500 ",
        aboutRightImageShadow: "20px 20px 0px 0px #FF7500 ",
        aboutSmRightImageShadow: "15px 15px 0px 0px #FF7500 ",
        testimonialsRightImageShadow: "10px 10px 0px 0px #FF7500 ",
        animalcards: " 0px 0px 25px 0px #0000001A",
        blogcards: "10px 10px 0px 0px #FF7500",
        footerTop: "0px -8px 145.2px 0px #0000002E",
        darkCards: "6px 6px 0px 0px #323232",
        btnHover: "0px 150px 0px -67px rgba(245,130,32,1) inset",
      },
    },
  },
  plugins: [],
};
