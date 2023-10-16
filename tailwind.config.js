module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      prim: "#15a493",
      "prim-dark": "#1a8376",
      black: "#000",
      white: "#fff",
      secondary: "#EA4C89",
      gray: "#0d0c22",
      error:'#dd0f0fed'
    },
  },
  variants: {
    extend: {},
  },
};
