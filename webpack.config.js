const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "eval",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },

  entry: {
    app: path.join(__dirname, "src", "index"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
  },
  plugins: [new HtmlWebpackPlugin()],
};
