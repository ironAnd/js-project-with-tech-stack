const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const webpackCommon = require('./webpack.common');

module.exports = {
  ...webpackCommon,
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/templates/index.html"),
      filename: 'index.html',
    }),
  ],
  output: {
    library: "jsProjectWithTechStack",
    libraryTarget: "window",
    libraryExport: "default",
    filename: "jsProjectWithTechStack.js",
    path: path.resolve(__dirname, "_bundles"),
  },
};