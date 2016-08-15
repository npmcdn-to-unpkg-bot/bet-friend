var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require('./webpack.config')

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(3000, 'localhost', function reloadServer(err, result) {
  if (err) {
    console.log(err)
    return
  }
  console.log(result)
  console.log('Listening at http://localhost:3000/')
})
