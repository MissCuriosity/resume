const webpack = require('webpack'), {resolve} = require('path')
module.exports = {
    //页面入口文件配置
    entry: ['./index.js'],
    //入口文件输出配置
    output: {
        path: __dirname + '/dist/',
        filename: 'bundle.js',
        publicPath: '/'
    },
    context: resolve(__dirname, 'src'),

    module: {
        //加载器配置
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader?modules']
            }, {
                test: /\.scss/,
                use: [
                    {
                        loader: 'style-loader'
                    }, {
                        loader: 'css-loader'
                    }, {
                        loader: 'sass-loader'
                    }
                ]
            }, {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    //其它解决方案配置
    resolve: {
        extensions: ['.js', '.json', '.scss']
    },
    plugins: [
        new webpack.DllReferencePlugin({context: __dirname, manifest: require('./manifest.json')}),
        new webpack
            .optimize
            .UglifyJsPlugin()
    ]
}
