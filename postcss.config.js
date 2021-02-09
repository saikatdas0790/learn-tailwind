const tailwindcss = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss")({
  content: [
    "./src/**/*.svelte",
    "./node_modules/svelte/*.js",
    "./src/**/*.html",
  ],
  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});
const autoprefixer = require("autoprefixer")();
const cssnano = require("cssnano")({ preset: "default" });

const production = process.env.NODE_ENV === "production";

module.exports = {
  plugins: [
    tailwindcss("./tailwind.config.js"),

    // only needed if you want to purge
    ...(process.env.NODE_ENV === "production"
      ? [purgecss, autoprefixer, cssnano]
      : []),
  ],
};
