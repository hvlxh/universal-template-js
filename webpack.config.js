/** @type {import('webpack').Configuration} */
module.exports = {
  entry: './dist/node.js',
  output: {
    filename: 'browser.js',
    // Below needed to be change
    library: "myModule",
    libraryTarget: 'umd',
    globalObject: 'this',
  },
};
