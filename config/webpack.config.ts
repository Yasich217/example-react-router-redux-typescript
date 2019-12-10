import * as path from 'path';
import * as webpack from 'webpack';

const HtmlWebpackPlugin = require('html-webpack-plugin'); // Через es6 импорт не работает.
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const isProduction = process.env.NODE_ENV !== 'production';
const srcPath = path.join(__dirname, '../src/');
const outPath = path.join(__dirname, '../out/');

const config: webpack.Configuration = {
  entry: {
    'bundle': path.resolve(srcPath, 'index.ts')
  },
  watch: !isProduction,
  devtool: isProduction ? undefined : 'source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'ts-loader'
        }
      },
      {
        test: /\.tsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'ts-loader',
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'ts-loader'
        }
      },
      {
        test: /\.(less)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        use: 'url-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.less', '.js', '.jsx', '.tsx', '.ts'],
    modules: [
      srcPath,
      'node_modules'
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      Promise: 'bluebird', // Прокидываем промисы Bluebird, т.к. они используются вместо нативных.
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: path.resolve(srcPath, 'index.html'),
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: './css/[name].css'
    })
  ],
  output: {
    filename: '[name].js',
    path: outPath
  }
};

export default config;
