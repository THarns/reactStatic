const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: ['./src/js/app.js', './src/scss/index.scss'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js' 
  },

  module: {
      rules: [
        {
            test: [/.js$/],
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env'
                    ]
                }
            }
        },

        {                
            test: [/.css$|.scss$/],                
            use:[                    
             'style-loader',
              MiniCssExtractPlugin.loader,         
             'css-loader',
             'sass-loader'
            ]            
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
            test: /\.(png|jpg|gif|svg|ico)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'assets/'
                }
              }
            ]
        }
      ]
  },

  plugins: [
    /*new HtmlWebpackPlugin({
        minify: {
            removeComments: true,
            collapseWhitespace: false
        }
    }),*/

    new MiniCssExtractPlugin({
        filename: './css/styles.css',
    }),

    new CopyWebpackPlugin([{

        from:'./src/resources',
   
         to:'assets/'
   
      }])
    ],

    devServer: {
        publicPath:'/dist/',
        contentBase: "./src/html",
        watchContentBase: true,
        host: '0.0.0.0',
        port: 8080
        //hot:true
    }
}