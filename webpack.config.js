const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExstractPlugin = require('css-minimizer-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const isProdaction = process.env.NODE_ENV === 'prodaction'

module.exports = {
    entry: './module/main.js',
    mode: isProdaction ? 'production' : 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExstractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resourse',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resourse',
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new CopyPlugin({
            patterns: [{ from: 'img', to: 'static' }],
        }),
        new HtmlWebpackPlugin({ template: './index.html' }),
        new MiniCssExstractPlugin(),
    ],
    optimization: {
        minimizer: ['...', new CssMinimizerPlugin()],
    },
    devtool: isProdaction ? 'hidden-source-map' : 'source-map',
}
