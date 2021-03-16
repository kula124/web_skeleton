const { merge } = require('webpack-merge')
const common = require('./webpack.config.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    clientLogLevel: 'silent',
    onListening: server => console.log(`Development server started on ${server.listeningApp.address().port}`)
  }
})
