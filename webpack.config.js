const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "/client/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve("dist"),
    publicPath: "/",
  },
  devServer: {
    port: 3000,
    watchContentBase: true
  },
  module: {
    rules:[
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.html$/,
        use: "html-loader"
      },
      /*Choose only one of the following two: if you're using
      plain CSS, use the first one, and if you're using a
      preprocessor, in this case SASS, use the second one*/
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use:[
          "style-loader",
          "css-loader",
          "sass-loader"
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: 'file-loader',
        type: 'asset/resource',
      }
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "index.html"
    }),
  ]
}