const path = require('path');
const webpack = require('webpack');

module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: process.env.VUE_APP_API_ENDPOINT,
        changeOrigin: true,
      },
    },
  },

  outputDir: '../public',

  indexPath:
    process.env.NODE_ENV === 'production'
      ? '../resources/views/index.blade.php'
      : 'index.html',
};
