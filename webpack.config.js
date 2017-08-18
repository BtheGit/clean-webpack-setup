const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].[hash].js'
	},
	module: {
		rules: [
      {
        enforce: "pre",
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      },
			{
				test: /\.jsx?$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['env', 'react']
						}
					}
				],
				exclude: /node_modules/
			}
      // ,
      // {
      //   test: /\.test\.js$/,
      //   use: 'mocha-loader',
      //   exclude: /node_modules/,
      // },
			{
				test: /\.s?css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						'css-loader',
						{
							loader: 'postcss-loader',
							options: {
								plugins: () => [autoprefixer('last 2 versions', 'ie 10')]
							}
						},
						'sass-loader'
					]
				})
			},
      {
        test: /\.(png|jpe?g|svg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: 'images/[name].[ext]'
          }
        }
      }
		]
	},
	plugins: [
		new ExtractTextPlugin('[name].[hash].css'),
		new webpack.LoaderOptionsPlugin({
			minimize: true
		}),
		new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new CleanWebpackPlugin(['dist'], {
      root:     __dirname,
      verbose:  true,
      dry:      false     
    }),
	]
}