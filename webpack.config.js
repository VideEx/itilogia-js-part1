const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist'),
        // clean: true,
    },
    module: {
        rules: [
            {
                test: /\.less$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader',
                ],
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin({
            template: "./template/main.html"
        }),
        new CopyPlugin({
            patterns: [
                {from: "template", to: "template"},
                {from: "static/img", to: "img"},
                {from: "css", to: "css"},
            ],
        }),

        new MiniCssExtractPlugin()
    ],

};