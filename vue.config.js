const path = require('path');
module.exports = {
  publicPath: '/FormDemo',
  outputDir: "dist",
  assetsDir: 'static',
  devServer: {
    port: 8085,
    https: false,
    open: true
  }
}