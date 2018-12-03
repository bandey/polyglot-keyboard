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
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              modules: true,
              importLoaders: 1,
              camelCase: true,
              localIdentName: '[path][local]',
            }
          },
        ]
      },
      {
        test: /\.woff$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts/',
              publicPath: 'fonts/', // else path will be absolute /fonts/
              name: '[name].[ext]',
            }
          },
        ]
      },
    ]
  },
  resolve: {
    extensions: ['.js'],
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      { from: './src/index.html', to: './' },
      { from: './src/index.php', to: './' },
      { from: './node_modules/bootstrap/dist/css/bootstrap.min.css', to: './styles/' },
    ], { copyUnmodified: false }),
  ],
  devtool: 'cheap-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true
  }
};