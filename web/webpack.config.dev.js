const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

module.exports = (env, argv) => ({
  extends: path.resolve(__dirname, './webpack.config.base.js'),
  output: {
    path: path.join(__dirname, '/build'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    port: process.env.FRONTEND_PORT,
    historyApiFallback: true,
    open: true,
  },
});
