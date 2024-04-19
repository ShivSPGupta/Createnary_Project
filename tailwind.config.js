/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        body: "#f8f9fb",
        primary: "#4a508e",
        "secondary-text": "#d6d6d6",
        "primary-text": "#11151d",
        "secondary-text-alt": "#404040",
        gray: {
          "100": "rgba(23, 23, 23, 0.4)",
          "200": "rgba(17, 21, 29, 0.4)",
          "300": "rgba(17, 21, 29, 0.08)",
        },
        steelblue: "#7075b5",
        "secondary-text1": "#ccc",
        gainsboro: {
          "100": "#e6e6e6",
          "200": "#dee0e0",
        },
        white: "#fff",
        "neutral-grey": "#dddce0",
        glass: "rgba(214, 214, 214, 0.4)",
        black: "#000",
        silver: "#c0c0c0",
      },
      spacing: {},
      fontFamily: {
        "b2-16-medium": "Urbanist",
        monoton: "Monoton",
      },
      borderRadius: {
        lg: "18px",
        mini: "15px",
        "8xs": "5px",
        "25xl": "44px",
        "24xl-3": "43.3px",
        "4xs-9": "8.9px",
        "16xl": "35px",
        "6xl": "25px",
        "8xs-3": "4.3px",
        "5xs-2": "7.2px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      "5xl": "24px",
      lgi: "19px",
      lg: "18px",
      "8xl": "27px",
      "3xl": "22px",
      "21xl": "40px",
      "13xl": "32px",
      "17xl": "36px",
      "10xl": "29px",
      "2xs": "11px",
      xl: "20px",
      "lgi-2": "19.2px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
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
