# React without CRA, with TypeScript & Webpack

- CRA 없이 TypeScript를 사용하는 리액트 환경을 구축하는 연습
- boiler plate 만드는법

## 기본 설정

```javascript
mkdir Practice_TS_Webpack // 폴더 생성
cd Practice_TS_Webpack // workspace로 이동

yarn init -y

yarn add react react-dom

yarn add -D webpack webpack-cli // 웹팩 설치

yarn add -D typescript ts-loader @types/react @types/react-dom @types/webpack // 타입 스크립트 관련 설치
```

> 위 과정을 거치면 package.json이 생성된다.

```javascript
// package.json 에 script 추가
scripts: {
    "dev": "webpack"
}
```

> yarn run dev로 webpack을 통한 번들링을 진행한다.

## tsconfig.json 생성

- root 폴더에 tsconfig.json 파일을 생성한다.

```javascript
{
    "compilerOptions": {
        "outDir": "./dist/",
        "sourceMap": true,
        "noImplicitAny": true,
        "module": "commonjs",
        "target": "es5",
        "jsx": "react",
        "allowJs": true,
        "moduleResolution": "node",
        "allowSyntheticDefaultImports": true,
        "esModuleInterop": true
    }
}
```

> ts 공식 문서를 참조하여 작성하였으며, 오류가 나는 부분은 구글링하여 추가했다.

## webpack.config.json 생성

- root 폴더에 webpack.config.json 파일을 생성한다.

```javascript
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "eval",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },

  entry: {
    app: path.join(__dirname, "src", "index"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
  },
  plugins: [new HtmlWebpackPlugin()],
};
```

> ts-loader : JSX 컴파일과 이전 ES를 타깃으로 컴파일 가능, babel-loader 보다 느리다. <br />
> babel-loader : 최신 ES 기능 사용 가능, TS도 컴파일 가능

## 파일구조

- 웹팩 번들링 결과는 ./dist/app.js에 저장 -> public의 index.html에서 불러와서 사용한다.
- First.tsx -> App.tsx -> index.tsx 구조를 가진다. index.tsx가 웹팩의 entry가 되어서 번들링을 시작한다.
