/* jshint node: true */
var path = require('path');


module.exports = {
  context: path.join(__dirname),
  entry: './lib/index.js',

  output: {
    path: path.join(__dirname),
    filename: 'monitor-app.js',
    libraryTarget: 'umd',
    library: 'MonitorApp'
  },

  externals: {
   'react': 'var React'
  },

  module: {
    loaders: [
      { test: /\.(js|jsx)$/, exclude: /node_modules\/(?!react-router)/, loader: 'react-hot!babel-loader' },
      {
        test: /\.scss$/,
        // Query parameters are passed to node-sass
        loader: 'style!css!sass?outputStyle=expanded&' +
          'includePaths[]=' + (path.resolve(__dirname, './bower_components')) + '&' +
          'includePaths[]=' + (path.resolve(__dirname, './node_modules'))
      }
    ]
  }
};
