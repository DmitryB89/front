const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const {nodeModules} = require("ts-loader/dist/constants");

module.exports = {
    mode: 'production',
    entry:
        path.resolve(__dirname, 'src', 'index.ts'),
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, 'build'),
        clean: true
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
        }),
        new webpack.ProgressPlugin(),
        ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        //чтобы не писать расширение файла при импорте
        extensions: ['tsx', '.ts', '.js']
    }
}