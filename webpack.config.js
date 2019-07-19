
const path = require("path")
const htmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')


module.exports = {
    entry: path.join(__dirname, "./src/main.js"),
    output: {
        path: path.join(__dirname, "./dist"),
        filename: 'bundle.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, "./src/index.html")
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
            chunkFilename: "[name].[contenthash].css"
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            { test: /\.css$/, use: [ MiniCssExtractPlugin.loader, 'css-loader'] },
            { test: /\.less$/, use: [ 'css-loader', 'less-loader'] },
            { test: /\.(woff2?|woff|eot|ttf|otf|svg)(\?.*)?$/, use: 'file-loader' },
            {
                test: /\.(jpg|png|gif|bmp|jpeg)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'images/[name].[hash:8].[ext]'
                }
            },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.vue$/, loader: 'vue-loader' }
        ]
    },
    resolve: {
        alias: {
            // 'vue$': 'vue/dist/vue.js'
        }
    }
}
