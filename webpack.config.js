const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["./src/enhance-console-log-loader.js"],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin()],
};
