const webpack = require('webpack');
const path = require('path');

const config = {
  // initial file that webpack parses through to make a dependency graph of all file assets to be bundled together
  entry: [
    './client/index.js'
  ],
  output: {
    path: path.resolve('build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
    ],
  },
  resolve: {
    extensions: [
      '.js',
      '.jxs',
      '.tsx',
      '.ts'
    ],
  },
  devServer: {
    publicPath: '/build/',
    contentBase: './build',
    proxy: {
      // optional to place stars /api/**
      '/api': 'http://localhost:3000'
    }
  }
};

module.exports = config;