/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "twitter-blue": "#1DA1F2",
        "brand-50": "#FDF6F6",
        "brand-100": "#FCEEEE",
        "brand-200": "#F7D4D4",
        "brand-300": "#F2BABB",
        "brand-400": "#E88687",
        "brand-500": "#DE5254",
        "brand-600": "#C84A4C",
        "brand-700": "#853132",
        "brand-800": "#642526",
        "brand-900": "#431919",
      },
    },

    fontFamily: {
      poppins: ["poppins"],
    },
  },
  plugins: [],
}
