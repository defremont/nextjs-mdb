const withCSS = require("@zeit/next-css");
const withFonts = require("next-fonts");
const withImages = require("next-images");
const withPlugins = require("next-compose-plugins");

module.exports = {
  webpack: config => {
    config.module.rules.push({
      test: /\.(txt|jpg|png|svg)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            context: "",
            outputPath: "static",
            publicPath: "_next/static",
            name: "[path][name].[hash].[ext]"
          }
        }
      ]
    });

    return config;
  }
};

module.exports = withPlugins([withCSS, withFonts, withImages]);
