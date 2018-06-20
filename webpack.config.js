module.exports = {
  entry: "./src/js/index.js",
  output: {
    path: __dirname,
    filename: "dist/js/bundle.js"
  },
  module: {
    loaders: [
      // { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  }
};