/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#fafafa",
          "200": "#25282b",
          "300": "#1d1d1d",
          "400": "#1a1a1a",
          "500": "rgba(255, 255, 255, 0)",
          "600": "rgba(255, 255, 255, 0.3)",
        },
        darkgray: "#a0a4a8",
        deeppink: "#d91966",
        lightgray: {
          "100": "#ced4da",
          "200": "rgba(202, 204, 207, 0.25)",
        },
        slategray: "#6c757d",
        whitesmoke: {
          "100": "#f9f9fa",
          "200": "#f8f9fa",
        },
        midnightblue: "#241348",
        gainsboro: "#e8e8e8",
        palevioletred: "#e875a3",
        snow: "#fef3f3",
        dimgray: "#52575c",
        darkslategray: "#2d2d2d",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "8xs": "5px",
        "3xs": "10px",
        "13xl": "32px",
        "9xl": "28px",
        "28xl-5": "47.5px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      lg: "18px",
      "9xl": "28px",
      "3xl": "22px",
      "17xl": "36px",
      "10xl": "29px",
      "5xl": "24px",
      lgi: "19px",
      "29xl": "48px",
      "19xl": "38px",
      "7xs": "6px",
      "26xl": "45px",
      "8xl": "27px",
      "45xl": "64px",
      "32xl": "51px",
      inherit: "inherit",
    },
    screens: {
      mq1425: {
        raw: "screen and (max-width: 1425px)",
      },
      lg: {
        max: "1200px",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
