const path = require('path')
const HTMLplug = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')


const isDev = process.env.NODE_ENV === 'development'

const cssLoaders = extra =>{
  const loaders = [ 
     MiniCssExtractPlugin.loader,
    'css-loader',
  ]
  if (extra){
    loaders.push(extra)
  }
  return loaders
}



module.exports = {
  entry:{
    main: ['@babel/polyfill', './src/index.js']
  }, 
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 4200
  },
  optimization: {
    minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  devtool: !isDev ? 'source-map' : '',
  plugins: [
    new HTMLplug({
      filename: 'index.html',
      template: './src/index.html'
    }),

    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),

    new CleanWebpackPlugin(),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/favicons'),
          to: path.resolve(__dirname, 'dist/favicons')
        },
      
      ]
    })

  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: cssLoaders()
      },
      {
        test: /\.s[ac]ss$/i,
        use: cssLoaders('sass-loader')
      },
      { test: /\.js$/,
         exclude: /node_modules/,
        loader: {
           loader: "babel-loader",
          options:{
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          } 
        } 
      },
      {
        test: /\.(png|jpg|svg|ico)$/,
        use: ['file-loader']
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ['file-loader']
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          attributes: {
            list: [
              {
                tag: 'img',
                attribute: 'src',
                type: 'src',
              },]
            }
          }
        }


    ],
  },

}