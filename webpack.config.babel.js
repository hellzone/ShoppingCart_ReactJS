'use strict';

import Path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const RootPath = Path.join(__dirname);
const BUILD = Path.join(__dirname, 'build');
const SOURCE = Path.join(__dirname, 'src');

module.exports = {
  entry: {
    index: Path.join(RootPath, 'src/assets/javascript/main.js'),
  },
  output: {
    path: Path.join(RootPath, '/build/'),
    filename: '[name]-[hash].min.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: Path.join(SOURCE, 'index.html'),
      inject: 'body',
      filename: 'index.html',
      chunks: ['index']
    }),
    new ExtractTextPlugin("[name]-[hash].min.css"),
    new webpack.ProvidePlugin({
      React: 'react',
      PropTypes: 'prop-types',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css'],
    alias: {
      components: Path.resolve(__dirname, 'src/assets/javascript/components/'),
    },
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader",
          publicPath: "/"
        })
      },
    ]
  },
};
