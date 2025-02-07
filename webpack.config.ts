import path from 'path'
import webpack from 'webpack'

import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildPaths} from "./config/build/types/config";



export default (env: BuildEnv) => {
    const mode = env.mode || 'development';
    const isDev = mode === 'development';

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        build: path.resolve(__dirname, 'build', 'build'),
        html: path.resolve(__dirname, 'public', 'index.html')
    }

    const PORT = env.port || 3000;

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths: paths,
        isDev,
        port: PORT
    })
    return config
}