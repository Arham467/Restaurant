/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        subNav: "#474747",
        NavListActive: "#DBDFD0",
        headding: "#101A24",
        prh: "#5C6574",
        prh2: "#2C2F24",
        btn: '#C31C1E',
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        play: ["Playfair Display", "serif"],
      },
      backgroundImage: {
        "bgImage": "url('/src/assets/banner.png')",
        "group": "url('/src/assets/group.png')",
        "group_bg": "url('/src/assets/Group_bg_2.png')",
        "contactBgImg": "url('/src/assets/contactbg.png')",
        "videoBg": "url('/src/assets/Food/BG.jpg')",
        "bookTableImg": "url('/src/assets/table.jpg')",
      }
    },
  },
  plugins: [],
};
