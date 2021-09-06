const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

const config = {
  entry: "./routes/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "build.js",
  },
  target: "node",
  externals: {
    express: "express",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  /* webpack-dev-server */
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    port: 3000,
    hot: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css", // 원하는 filename
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./public/index.html"),
      inject: true,
      filename: path.resolve(__dirname, "./dist/index.html"),
    }),
    new NodePolyfillPlugin(),
  ],
};

module.exports = config;
