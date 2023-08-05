const path = require('path');

module.exports = (env, argv) => ({
  extends: path.resolve(__dirname, './webpack.config.base.js'),
  output: {
    path: path.join(__dirname, '/build'),
    publicPath: './',
    filename: 'bundle.js',
  },
});
