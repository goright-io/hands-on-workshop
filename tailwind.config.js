var flattenColorPalette = require("tailwindcss/lib/util/flattenColorPalette")
  .default;
  
  
  const defaultConfig = require("tailwindcss/defaultConfig")

const designSystem = require("@goright/design-system");
const goRightTheme = designSystem.twconfig.theme;
module.exports = {
  purge: {
    content: [
      "./components/**/*.js",
      "./pages/**/*.js",
      "@goright/design-system",
    ],
    options: {
      safelist: ["bg-v-dark-blue", "prose"],
    },
  },
  theme: {
    typography: {},

    extend: {
      typography: () => ({
        ...defaultConfig.theme.typography,
        DEFAULT: {
          css: {
            color: goRightTheme.colors.light["on-background"]["900"],
            maxWidth: "72ch",
            p: {
              fontSize: goRightTheme.fontSize.base,
              fontWeight: goRightTheme.fontWeight.base,
              fontFamily: goRightTheme.fontFamily.base.join(","),
              lineHeight: goRightTheme.lineHeight.base,
              letterSpacing: goRightTheme.letterSpacing.base,
              paddingTop: "1rem",
              paddingBottom: "1rem",
            },
            h2: {
              fontSize: goRightTheme.fontSize["3Xl"],
              fontWeight: goRightTheme.fontWeight["3Xl"],
              fontFamily: goRightTheme.fontFamily["3Xl"].join(","),
              lineHeight: goRightTheme.lineHeight["3Xl"],
              letterSpacing: goRightTheme.letterSpacing["3Xl"],
              marginTop: "3rem"
            },
            h3: {
              fontSize: goRightTheme.fontSize["2Xl"],
              fontWeight: goRightTheme.fontWeight["2Xl"],
              fontFamily: goRightTheme.fontFamily["2Xl"].join(","),
              lineHeight: goRightTheme.lineHeight["2Xl"],
              letterSpacing: goRightTheme.letterSpacing["2Xl"],
              marginTop: "3rem"
            },
            pre: {
              backgroundColor: goRightTheme.colors.primary["100"],
              color: goRightTheme.colors.light["on-background"]["900"],
              padding: "1rem"
            },
            a: {
              textDecoration: "none",
              underline: "none",
            },
          },
        },
      }),
      colors: {
        "v-red": "rgba(236, 78, 75, 1)",
        "v-yellow": "rgba(248, 209, 121, 1)",
        "v-blue": "rgba(133, 216, 243, 1)",
        "v-dark-blue": "rgba(0, 185, 245, 1)",
      },
      borderWidth: {
        30: "30px",
      },
      backgroundImage: () => ({
        "design-systems": "url('/balazs-ketyi-9VzoRKfBsMM-unsplash.jpg')",
      }),
      spacing: {
        "2/3": "66.666667%",
        "1/1": "100%",
      },
    },
        ...defaultConfig.theme,
            ...goRightTheme,


  },
  plugins: [
    ({ addUtilities, e, theme, variants }) => {
      const colors = flattenColorPalette(theme("borderColor"));
      delete colors["default"];

      const colorMap = Object.keys(colors).map((color) => ({
        [`.border-t-${color}`]: { borderTopColor: colors[color] },
        [`.border-r-${color}`]: { borderRightColor: colors[color] },
        [`.border-b-${color}`]: { borderBottomColor: colors[color] },
        [`.border-l-${color}`]: { borderLeftColor: colors[color] },
      }));
      const utilities = Object.assign({}, ...colorMap);

      addUtilities(utilities, variants("borderColor"));
    },
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
  variants: {
    extend: {
      transform: ["group-hover"],
      transitionDuration: ["group-hover"],
      transitionProperty: ["group-hover"],
      translate: ["group-hover"],
      scale: ["group-hover"],
    },
  },
};
