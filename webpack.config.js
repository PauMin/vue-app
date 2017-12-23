var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var appName = 'app';
var entryPoint = './src/app.js';
var exportPath = path.resolve(__dirname, './dist/assets');

var plugins = [];

var env = process.env.WEBPACK_ENV;

if (env === 'production') {
  var extractSass = new ExtractTextPlugin({
      filename: "css/[name].[contenthash].css"
  });
  var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

  plugins.push(new UglifyJsPlugin({ minimize: true }));
  plugins.push(new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }
  ));
  plugins.push(extractSass);

  appName = appName + '.min.js';
} else {
  var extractSass = new ExtractTextPlugin({
      filename: "css/[name].css"
  });

  appName = appName + '.js';

  plugins.push(extractSass);
}

module.exports = {
  entry: entryPoint,
  output: {
    path: exportPath,
    filename: appName
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            i18n: '@kazupon/vue-i18n-loader'
          }
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.(css|scss)$/,
        use: extractSass.extract({
          use: [{
            loader: "css-loader"
          }, {
            loader: "sass-loader"
          }],
          fallback: "style-loader"
        })
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    clientLogLevel: "info",
    port: 8080,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins
};
