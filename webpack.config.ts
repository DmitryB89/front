import path from 'path'
import webpack from 'webpack'

import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildPaths} from "./config/build/types/config";

const mode = 'development';
const isDev = mode === 'development';

const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build', 'build'),
    html: path.resolve(__dirname, 'public', 'index.html')
}

const config: webpack.Configuration = buildWebpackConfig({
    mode: 'development',
    paths: paths,
    isDev
})

export default config