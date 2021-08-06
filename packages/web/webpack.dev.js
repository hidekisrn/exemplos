/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge');
const path = require('path');
const DotEnv = require('dotenv-webpack');

const webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig, {
  mode: 'development',
  devtool: 'eval',
  cache: true,
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
    filename: 'bundle.js',
    historyApiFallback: true,
    disableHostCheck: true,
    inline: true,
    host: '0.0.0.0',
    hot: true,
    port: 8081,
  },
  plugins: [
    new DotEnv({
      path: '.env.development',
      safe: true,
      silent: true,
    }),
  ],
});
