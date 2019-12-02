const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  plugin: [
    {
      test: /\.(s)*css/,
      use: ['style-loader','css-loader','sass-loader']
    }
  ],
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, './dist/index.html'),
    filename: 'bundle.js'
  }
}

