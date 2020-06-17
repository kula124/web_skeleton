const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    modules: [
      'node_modules',
      path.join(__dirname, 'src')
    ]
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", {
          loader: "css-loader", options: {
            modules: true,
            importLoaders: 1,
            localIdentName: '[name]--[local]--[hash:base64:8]'
          }
        }]
      },
      {
        test: /\.scss$/,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          {
            loader: "css-loader", options: {
              modules: {
                localIdentName: '[local]--[hash:base64:8]'
              },
              importLoaders: 1,
            }
          },
          // Compiles Sass to CSS
          'sass-loader'
        ],
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'index.html') })]
};
