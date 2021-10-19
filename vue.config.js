const path = require('path');
module.exports = {
  publicPath: '/formDemo',
  outputDir: "dist",
  assetsDir: 'static',
  devServer: {
    port: 8085,
    https: false,
    open: true
  }
}