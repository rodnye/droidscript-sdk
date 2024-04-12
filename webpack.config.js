
const path = require('path');
const packageJson = require('./package.json');
const { BannerPlugin } = require('webpack');

module.exports = {
  entry: './lib/index.js', 
  output: {
    path: path.resolve(__dirname, 'dist'), 
    filename: 'droid.min.js', 
    library: 'droid',
    libraryTarget: 'window',  
  },
  mode: 'production', 
  target: 'node', 
  plugins: [
    new BannerPlugin({
      banner: packageJson.name + '@' + packageJson.version
    })
  ]
};