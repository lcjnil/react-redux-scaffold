'use strict';
var webpack = require('webpack');
var cssnext = require('cssnext');
var precss = require('precss');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var assetPath = require('path').join(__dirname, 'dist');

module.exports = {

  output: {
    path: assetPath,
    filename: 'main.js',
    publicPath: '/'
  },

  cache: true,
  debug: true,
  devtool: 'sourcemap',
  entry: [
    'webpack-hot-middleware/client',
    './src/main.js'
  ],

  stats: {
    colors: true,
    reasons: true
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      'actions': __dirname + '/src/actions/',
      'components': __dirname + '/src/components/',
      'constants': __dirname + '/src/constants/',
      'pages': __dirname + '/src/pages/',
      'reducers': __dirname + '/src/reducers/',
      'styles': __dirname + '/src/styles',
      'images': __dirname + '/src/public/images'
    }
  },
  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: [/node_module/, 'mock/*'],
      loader: 'eslint'
    }],
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        plugins: ['react-transform'],
        extra: {
          'react-transform': {
            transforms: [{
              transform: 'react-transform-hmr',
              imports: ['react'],
              locals: ['module']
            }, {
              transform: 'react-transform-catch-errors',
              imports: ['react', 'redbox-react']
            }]
          }
        }
      }
    }, {
      test: /\.scss/,
      exclude: [/node_module/],
      loader: 'style!css?module&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss'
    }, {
      test: /\.css/,
      exclude: [/node_module/],
      loader: 'style!css'
    }, {
      test: /\.(png|jpg|woff|woff2)$/,
      loader: 'url?limit=8192'
    }]
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      __DEVELOPMENT__: true,
      __DEVTOOLS__: true
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html.tpl',
      inject: 'body'
    })
  ],

  postcss: function() {
    return [
      cssnext({
        autoprefixer: ['last 2 version']
      }),
      precss
    ]
  }

};
