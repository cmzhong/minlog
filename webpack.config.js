const webpack = require('webpack');
const path = require('path');

const config = {
  mode: process.env.NODE_ENV,
  entry: [
    './client/index.tsx'
  ],
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'build'),
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
    publicPath: '/build',
  }
};

module.exports = config;