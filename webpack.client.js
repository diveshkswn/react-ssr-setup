/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
require('dotenv').config();

const scriptExtensions = /\.(tsx|ts|js|jsx|mjs)$/;

const browserConfig = {
  mode: 'production',
  entry: './src/client/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist-client'),
    filename: 'bundle.js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist-client'),
    },
    compress: true,
    historyApiFallback: true,
    hot: true,
    open: true,
  },
  module: {
    rules: [
      { test: scriptExtensions, use: 'babel-loader', exclude: '/node_modules/' },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
          'postcss-loader',
        ],
      },

    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      __isBrowser__: 'true',
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  devtool: 'inline-source-map',
};

module.exports = [browserConfig];
