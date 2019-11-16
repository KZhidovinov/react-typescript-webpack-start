const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: 'index.tsx',
    devtool: 'source-map',
    context: path.join(__dirname),

    output: {
        filename: '[name].[hash].js',
        path: path.join(__dirname, 'wwwroot')
    },

    devServer: {
        host: 'localhost',
        port: 9000,
        hot: true,
        contentBase: path.join(__dirname, 'wwwroot')
    },

    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: ['ts-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
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
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
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