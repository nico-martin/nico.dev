import path from 'path';
import pkg from './package.json';

import CleanWebpackPlugin from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import HtmlInlineSourcePlugin from 'html-webpack-inline-source-plugin';
import ScriptExtHtmlPlugin from 'script-ext-html-webpack-plugin';
import AsyncStylesheetPlugin from 'async-stylesheet-webpack-plugin';
import LiveReloadPlugin from 'webpack-livereload-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const DIST_DIR = path.resolve(__dirname, "dist");
const SRC_DIR = path.resolve(__dirname, "src");
const app = pkg.app;

const inlineCss = new ExtractTextPlugin("assets/inline.css");
const appCss = new ExtractTextPlugin("assets/app-[hash].css");

module.exports = {
	entry: [
		`${SRC_DIR}/styles/app.scss`,
		`${SRC_DIR}/styles/inline.scss`,
		`${SRC_DIR}/scripts/app.js`
	],
	output: {
		path: DIST_DIR,
		filename: "assets/app-[hash].js",
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.svg$/,
				exclude: /node_modules/,
				use: 'raw-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpg|gif)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]?[hash]'
				}
			},
			{
				test: /inline\.scss$/,
				use: inlineCss.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								url: false
							}
						},
						{
							loader: 'postcss-loader',
							options: {
								plugins: () => [require('autoprefixer')]
							}
						},
						{
							loader: 'sass-loader',
							options: {minimize: true}
						},
					]
				})
			},
			{
				test: /app\.scss$/,
				use: appCss.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								url: false
							}
						},
						{
							loader: 'postcss-loader',
							options: {
								plugins: () => [require('autoprefixer')]
							}
						},
						{
							loader: 'sass-loader'
						}
					]
				})
			},
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		inlineCss,
		appCss,
		new CopyWebpackPlugin([
			{
				from: 'src/.htaccess.example',
				to: './.htaccess',
				toType: 'file'
			},
			{
				from: 'src/img/**/*',
				to: './assets/img/',
				transformPath(targetPath, absolutePath) {
					return targetPath.replace('\\src\\img', '');
				},
			},
			{
				from: 'src/version.json',
				to: './version.json',
				toType: 'file'
			}
		]),
		new HtmlWebpackPlugin({
			//hash: true,
			title: app.title,
			description: app.description,
			subtitle: 'test',
			template: 'src/index.html',
			filename: './index.html',
			inlineSource: '.inline.css$',
		}),
		new HtmlInlineSourcePlugin(),
		new AsyncStylesheetPlugin({
			preloadPolyfill: true
		}),
		new ScriptExtHtmlPlugin({
			defaultAttribute: 'defer'
		}),
		new LiveReloadPlugin(),
		new MiniCssExtractPlugin()
	]
};