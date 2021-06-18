const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  pageExtensions: ["js", "jsx", "mdx"],
  trailingSlash: true,
   future: {
    webpack5: true,
  },
});