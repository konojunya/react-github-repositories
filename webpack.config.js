const webpack = require("webpack");
const path = require("path");
const CleanPlugin = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const IS_PRODUCTION = process.env.NODE_ENV === "production";

const plugins = [
  new CleanPlugin(["dist"], {
    verbose: true
  }),
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || "local"),
    },
    "process.title": JSON.stringify("browser")
  }),
  new webpack.optimize.ModuleConcatenationPlugin()
];

module.exports = {
  target: "web",
  mode: IS_PRODUCTION ? "production" : "development",
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"]
  },
  entry: "./src/client.tsx",
  output: {
    path: path.resolve(__dirname, "./dist/"),
    filename: "bundle.js",
    chunkFilename: "[chunkhash].js",
    sourceMapFilename: "[chunkhash].js.map",
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: "ts-loader",
      exclude: /node_modules/
    }]
  },
  devtool: IS_PRODUCTION ? false : "#source-map",
  stats: "minimal",
  optimization: {
    splitChunks: {
      chunks: "initial",
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          enforce: true
        }
      }
    },
    concatenateModules: true,
    minimizer: [
      new TerserPlugin({
        sourceMap: true,
        terserOptions: {
          compress: true,
          output: {
            beautify: false
          }
        }
      })
    ]
  },
  plugins
};