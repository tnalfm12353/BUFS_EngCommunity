var path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src/main/jsx'), //React 소스 경로는 src/main/jsx로 한다
    entry: { //MainPage.jsx 스크립트를 빌드한다
        //jsp에 찍어내는 것들만 번들로 만들면 됨.. 그것도 모르고 일일이 다했다니...
        
        main: './Mainpage.jsx',
        lifeCycle: './lifeCycle.jsx',
    },
    devtool: 'sourcemaps',
    cache: true,
    output: { //빌드한 결과 js 파일들은 src/main/webapp/js/react 아래에 [웹페이지 이름].bundle.js 파일로 놓는다
        path: __dirname,
        filename: './src/main/webapp/js/react/[name].bundle.js',
        publicPath: '/'
    },
    mode: 'none',
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        hot: true
    },
    module: {
        rules: [
            { //.jsx 파일은 ES6 등의 JavaScript 구문을 사용하며 React 스크립트다
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }, {
                test: /\.css$/, //.css 파일은 웹페이지내에 포함한다
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: {
                    loader:'url-loader',
                }
            }
        ]
    }
};