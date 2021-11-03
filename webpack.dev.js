const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const webpackCommon = require("./webpack.common");

module.exports = {
  ...webpackCommon,
  mode: "development",
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/templates/index-dev.html"),
      filename: "index-dev.html",
    }),
  ],
  output: {
    library: "jsProjectWithTechStack",
    libraryTarget: "window",
    libraryExport: "default",
    filename: "jsProjectWithTechStack.dev.js",
    path: path.resolve(__dirname, "_bundles"),
  },
};
