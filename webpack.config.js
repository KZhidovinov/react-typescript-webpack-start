const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',

    context: path.join(__dirname),

    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },

    devtool: 'source-map',

    devServer: {
        host: 'localhost',
        port: 9000,
        hot: true,
        contentBase: path.join(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader'
                    }
                ]
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            }
        ]
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js'],

        modules: [
            'node_modules',
            path.join(__dirname, 'src')
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html'),
        })
    ],

    externals: {
        // Use external version of React
        "react": "React",
        "react-dom": "ReactDOM"
    },
};