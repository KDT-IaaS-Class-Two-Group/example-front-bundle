const path = require('path');

module.exports = {
  entry: "./src/app.ts",
  output:{
    filename: "app.bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module:{
    rules:[
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve:{
    extensions: [".ts", ".js"]
  },
};