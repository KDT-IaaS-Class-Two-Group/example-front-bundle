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
        test:"",      // 정규식을 사용하여 파일을 찾는다.
        use: "",      // 사용할 로더를 정의한다.
        exclude:""    // 제외할 파일을 정의한다.
      }
    ]
  },
  resolve:"",
};