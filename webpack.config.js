const path = require('path');
module.exports = {
    entry: {app: './index.jsx'}, //指定入口文件，程序从这里开始编译,__dirname当前所在目录, ../表示上一级目录, ./同级目录
    output: {
        path: path.resolve(__dirname, './build'), // 输出的路径
        filename: 'bundle.js'  // 打包后文件,出现问题加上externals后便无法加载bundle.js，但是程序运行没问题。
    },
	module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: ['style-loader','css-loader','less-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(png|jsp|gif)$/,
                use: [{
                    loader:'url-loader',
                    options:{
                        limit:500000
                    }
                }]
            },
        ]
    }
}