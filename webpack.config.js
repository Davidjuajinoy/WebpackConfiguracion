const HtmlWebPackPlugin= require('html-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const OptimizeCssAssetsPlugin=require('optimize-css-assets-webpack-plugin');

module.exports = {

    mode : 'development',
    optimization:{
        minimizer: [ new OptimizeCssAssetsPlugin() ]
    },
    module: {
        rules : [
            {

                test: /\.css$/,
                exclude : /styles\.css$/,
                use : [
                    'style-loader',
                    'css-loader'
                ]
            },

                 {

                test: /styles\.css$/,
                use : [
                    // 'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },

            {
                // condicion que aplique esta regla si es un archivo con .html
                test: /\.html$/,
                use:[
                    {
                    loader : 'html-loader',
                    // para borrar comentarios
                    options: { minimize: false }
                    }
                ]
            },

            {
                test: /\.(png|svg|jpg|gif)$/,
                use : [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                            name: 'assets/[name].[ext]'
                        }
                    }
                ]
            }
           
       
        ]
    },
    plugins : [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
        }),
        new MiniCssExtractPlugin({

            filename : '[name].css',
            ignoreOrder: false
        })
    ]


}