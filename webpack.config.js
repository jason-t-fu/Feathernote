// webpack.config.js
var path = require('path');

module.exports = {
  entry: './frontend/feathernote.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      'quill$': path.resolve(__dirname, 'node_modules/quill/quill.js')
    },
    extensions: ['.js', 'svg']
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /node_modules(!?\/quill)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/env', '@babel/react']
          }
        },
      },
      {
        test: /\.svg$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }]
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};