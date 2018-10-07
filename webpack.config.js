const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      }
    ]
  },
  resolve: {
    extensions: ['.js'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      { from: './src/index.html', to: './' },
      { from: './node_modules/bootstrap/dist/css/bootstrap.min.css', to: './styles/' },
    ], { copyUnmodified: false }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true
  }
};