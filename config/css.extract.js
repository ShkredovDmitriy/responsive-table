const path = require("path");
const glob = require("glob");
const ExtractTextPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");
const PurgecssPlugin = require("purgecss-webpack-plugin");

const PATHS = {
  src: path.join(__dirname, "../dev")
};

module.exports = function(paths) {
  return {
    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: ExtractTextPlugin.loader,
              options: {
                publicPath: "../"
              }
            },
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                plugins: [autoprefixer()],
                sourceMap: true
              }
            },
            {
              loader: "resolve-url-loader"
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin({
        filename: "./css/[name].css?[hash]"
      }),
      new PurgecssPlugin({
        paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
        safelist: [/ps/]
      })
    ]
  };
};
