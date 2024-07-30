const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        // clean: true,
    },
    plugins: [new HtmlWebpackPlugin({
            template: "index.html"
        }),
        new CopyPlugin({
            patterns: [
                {from: "template", to: "template"},
                {from: "src", to: "js"},
                {from: "js", to: "js"},
                {from: "static/img", to: "img"},
                {from: "css", to: "css"},
            ],
        }),

        new MiniCssExtractPlugin()
    ],

};