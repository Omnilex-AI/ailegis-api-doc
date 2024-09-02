const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

const nextConfig = {
  swcMinify: true,
  trailingSlash: true,
  output: "export",
};

module.exports = {
  ...withNextra(),
  ...nextConfig,
};