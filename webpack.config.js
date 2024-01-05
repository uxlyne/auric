const path = require('path');
const DotenvWebpackPlugin = require('dotenv-webpack');

module.exports = {
  // Your existing Webpack configuration settings here...

  plugins: [
    new DotenvWebpackPlugin(), // Load environment variables from a .env file
    // Other plugins...
  ],

  resolve: {
    fallback: {
      path: require.resolve('path-browserify'),
      os: require.resolve('os-browserify/browser'),
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'), // Add this line for the 'stream' module
    },
  },
};


