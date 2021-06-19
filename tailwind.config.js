// var flattenColorPalette = require("tailwindcss/lib/util/flattenColorPalette")
//   .default;

const designSystem = require("@goright/design-system");
const goRightConfig = designSystem.twconfig;

const defaultConfig = require("tailwindcss/defaultConfig");

const resolveConfig = require("tailwindcss/resolveConfig");

const conf = {
  // mode: "jit",
  purge: ["./**/*.{js,jsx,md,mdx}"],
  plugins: [
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

module.exports = resolveConfig(goRightConfig, conf);
