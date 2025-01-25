import path from 'path'
import webpack from 'webpack'
import HTMLWebpackPlugin from 'html-webpack-plugin';

const config: webpack.Configuration = {
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
                //Файлы, необходимые пропустить через loader (loader необходим для обработки файлов, выходящих за рамки js)
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

export default config