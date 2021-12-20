module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    container: {
      center: true,
    },
    fontSize: {
      xxs: ".65rem",
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
      "9xl": "9rem",
    },
    screens: {
      desktopXS: { max: "1600px" },
      lptpXL: { max: "1324px" },
      lptpXS: { max: "1024px" },
      tabletXL: { max: "971px" },
      settingsBP: { max: "700px" },
      mobileXL: { max: "650px" },
      mobileSM: { max: "450px" },
      sm: { max: "576px" },
    },
    zIndex: {
      0: 0,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      50: 50,
      25: 25,
      50: 50,
      75: 75,
      100: 100,
    },
    colors: {
      primary: "#262626",
      gradient: {
        from: "#9A86B5",
        to: "#D3EEE6",
      },
      default: {
        first: "#9A86B5",
        second: "#D3EEE6",
        dark: "#A9CCC2",
        darkf: "#7E6998",
      },
      transparent: " rgba(255, 255, 255, 0)",
      modal: "rgba(0, 0, 0, 0.15)",
      modal2: "rgba(0, 0, 0, 0.4)",
      white: "#ffff",
      blue: {
        medium: "#005c98",
      },
      black: {
        light: "#262626",
        faded: "#00000059",
        hintp: "#5A5A5A",
        hints: "#7B7B7B",
      },
      gray: {
        hint: "rgba(255, 255, 255, 0.71)",
        inactive: "#EBEBEB",
        inputborder: "#E1E1E1",
        extralight: "#B6B6B6",
        light: "#8D8D8D",
        middle: "#7C7C7C",
        base: "#5E5E5E",
        background: "#fafafa",
        primary: "#dbdbdb",
        date: "#404040",
        border: "#DCDCDC",
        sugtop: "#3E3E3E",
        addtext: "#A5A5A5",
        link: "#D8D8D8",
        bordernav: "#f2f2f2",
        settingsLabel: "#686868",
        inputsBook: "#A0A0A0",
        genresBg: "#F0F0F0",
        genres: "#DCDCDC",
        bgMobile: "#F4F4F4",
        addContainer: "#F8F8F8",
        genreMobile: "#4D4C4C",
        menuButton: "#b6b6b6",
      },
      themeSettingsExs: {
        lightFirst: "#9A86B5",
        lightSecond: "#B7BBCE",
        lightThird: "#D3EEE6",
        darkFirst: "#6465A1",
        darkSecond: "#9E88B7",
        darkThird: "#DEB1D4",
      },
      red: {
        primary: "#ed4956",
        dark: "#A53434",
      },
    },
    maxWidth: {
      xxs: "14rem",
      xs: "17rem",
      containerLg: "1286px",
      screen: "100vw",
    },
    maxHeight: {
      post: "35rem",
      screen: "100vh",
    },
    fill: {
      red: "#ed4956",
    },
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 0px 25px -5px rgba(0, 0, 0, 0.07), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      inner: "inset 0 20000px 4000000px 0 rgba(0, 0, 0, 0.90)",
      none: "none",
      addanswer: "0px -3px 8px rgba(0, 0, 0, 0.05)",
    },
    extend: {
      borderWidth: "3px",
      fontFamily: {
        fontbasic: ["Montserrat"],
        logo: ["Baloo"],
      },
      zIndex: {
        n1: -1,
      },
      width: {
        searchBar: "20.25rem",
        post: "40rem",
        postMd: "36rem",
        postSm: "30rem",
        userinfo: "30rem",
        userinfoMD: "27rem",
        userinfoSM: "22rem",
        menu: "19rem",
        navborder: "2px",
        contentSettings: "704px",
        settingsCard: "210px",
        settingsCardHover: "214px",
        postAddBase: "900px",
        uploadLarge: "480px",
        uploadSmall: "200px",
        settingsMid: "858px",
        settingsSmall: "658px",
        45: "11.25rem",
        99: "99.5%",
      },
      height: {
        searchBar: "2.7rem",
        contentSettings: "510px",
        settingsCard: "42px",
        settingsCardHover: "46px",
        postAddBase: "800px",
        uploadLarge: "500px",
        uploadSmall: "75px",
        settingsSmall: "370px",
      },
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
      margin: {
        "-30": "-6.5rem",
      },
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2%",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
      btn: "2px",
    },
  },

  variants: {
    display: ["group-hover"],
    width: ["responsive", "hover", "focus"],
    borderStyle: ["hover", "focus"],
  },
  corePlugins: {
    divideWidth: false,
  },
};
