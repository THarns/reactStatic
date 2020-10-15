const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

/**Will need to reconfigure for production builds. See bookmarks in chrome for setup of webpack.dev.js webpack.common.js and production */
module.exports = {
    node: { fs: 'empty'},
    entry: 
    ['./src/js/index.jsx', './src/scss/index.scss'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath:'/dist/',
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['@babel/preset-env', '@babel/preset-react']
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "raw-loader"
                        }
                    ]
            },
            {
                test: [/.css$|.scss$/],                
                use:[                    
                //'style-loader',
                MiniCssExtractPlugin.loader,         
                'css-loader',
                'sass-loader'
                ]  
            },

            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                  'file-loader',
                  {
                    loader: 'image-webpack-loader',
                    options: {
                        name: '[name].[ext]',
                        //outputPath: 'assets/'
                    },
                  },
                ],
            },

            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            }
    ]},

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/styles.css',
        }),

        new HtmlWebPackPlugin({
            //hash:true,
            template: "./src/index.html",
            filename: "./index.html"
        }),
        
        new CopyWebpackPlugin({
        patterns: [
            { from:'./src/resources', to:'resources/' },
            //{ from: './src/*.html', to: 'html/' },
            ]
        }),
    ],

    devServer: {
        publicPath:'/dist/',
        contentBase: ["./dist", "./src"],
        watchContentBase: true,
        // hot:true, 
        host: '0.0.0.0',
        port: 8080
    }
};