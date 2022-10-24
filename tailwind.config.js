/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#162A41",
        primary_2: "#FA983A",
        primary_3: "#A3CB38",
        primary_4: "#10AC84",
        paragraph: "#333333",
        paragraph_2: "#7B7B7B",
        paragraph_3: "#D5E0EA",
        heading: "#263048",
        heading_2: "#2A2C30",
        mask: "#0073E1",
        mask_2: "#33485c",
        background: "#F8F8FB",
        background_2: "#F9FCFF",
        background_3: "#25517A",
        background_fail: "#EEF7FF",
        red: "#F21515",
        green: "#15F26E",
      },
    },
  },
  plugins: [],
};
