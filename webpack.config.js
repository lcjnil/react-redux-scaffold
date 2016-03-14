import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const development = {
  output: {
    path: require('path').join(__dirname + '/dist'),
    filename: 'index.js',
    publicPath: '/'
  },
  debug: true,
  devtool: 'eval',
  entry: [
    'eventsource-polyfill',
    'webpack-hot-middleware/client',
    './src/index'
  ],
  stats: {
    colors: true,
    reasons: true
  },
  resolve: {
    extensions: ['', '.js'],
    alias: {
      'actions': __dirname + '/src/actions/',
      'components': __dirname + '/src/components/',
      'constants': __dirname + '/src/constants/',
      'pages': __dirname + '/src/pages/',
      'reducers': __dirname + '/src/reducers/',
      'styles': __dirname + '/src/styles',
      'images': __dirname + '/src/public/images',
      'lib': __dirname + '/src/lib'
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
      loader: 'babel'
    }, {
      test: /\.scss/,
      exclude: [/node_module/],
      loader: 'style!css?module&localIdentName=[path][name]---[local]---[hash:base64:5]!postcss'
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      __DEVELOPMENT__: true
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html.tpl',
      inject: 'body'
    })
  ],
  postcss() {
    return [
      require("postcss-import")({addDependencyTo: webpack}),
      require("postcss-url")(),
      require("postcss-cssnext")(),
      require('precss'),
      require("postcss-browser-reporter")(),
      require("postcss-reporter")()
    ];
  }
};

const production = {
  output: {
    path: require('path').join(__dirname + '/dist'),
    filename: 'index-[hash].js',
    publicPath: '/'
  },
  devtool: 'sourcemap',
  entry: [
    './src/index'
  ],
  stats: {
    colors: true,
    reasons: true
  },
  resolve: {
    extensions: ['', '.js'],
    alias: {
      'actions': __dirname + '/src/actions/',
      'components': __dirname + '/src/components/',
      'constants': __dirname + '/src/constants/',
      'pages': __dirname + '/src/pages/',
      'reducers': __dirname + '/src/reducers/',
      'styles': __dirname + '/src/styles',
      'images': __dirname + '/src/public/images',
      'lib': __dirname + '/src/lib'
    }
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.scss/,
      exclude: [/node_module/],
      loader: 'style!css?module&localIdentName=[path][name]---[local]---[hash:base64:5]!postcss'
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
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      __DEVELOPMENT__: false
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html.tpl',
      inject: 'body'
    })
  ],
  postcss() {
    return [
      require("postcss-import")({addDependencyTo: webpack}),
      require("postcss-url")(),
      require("postcss-cssnext")(),
      require('precss'),
      require("postcss-browser-reporter")(),
      require("postcss-reporter")()
    ];
  }
};

module.exports = { development, production };
