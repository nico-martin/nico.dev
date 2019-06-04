import path from 'path';
import pkg from './package.json';

import CleanWebpackPlugin from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import HtmlInlineSourcePlugin from 'html-webpack-inline-source-plugin';
import HtmlWebpackExcludeAssetsPlugin from 'html-webpack-exclude-assets-plugin';
import FaviconsWebpackPlugin from 'favicons-webpack-plugin';
import ScriptExtHtmlPlugin from 'script-ext-html-webpack-plugin';
import AsyncStylesheetPlugin from 'async-stylesheet-webpack-plugin';
import LiveReloadPlugin from 'webpack-livereload-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import WebpackPwaManifest from 'webpack-pwa-manifest';
import {GenerateSW} from 'workbox-webpack-plugin';
import RobotstxtPlugin from 'robotstxt-webpack-plugin';
import SitemapPlugin from 'sitemap-webpack-plugin';

const DIST_DIR = path.resolve(__dirname, "dist");
const SRC_DIR = path.resolve(__dirname, "src");
const app = pkg.app;

const inlineCss = new ExtractTextPlugin("assets/inline.css");
const appCss = new ExtractTextPlugin("assets/app-[hash].css");

module.exports = {
	entry: [
		`${SRC_DIR}/styles/app.scss`,
		`${SRC_DIR}/styles/inline.scss`,
		`${SRC_DIR}/scripts/main.js`
	],
	output: {
		path: DIST_DIR,
		filename: "assets/app.js",
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
				test: /\.(js|jsx)$/,
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
		new CleanWebpackPlugin({
			cleanStaleWebpackAssets: false
		}),
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
			template: 'src/index.html',
			filename: './index.html',
			inlineSource: '.inline.css',
			excludeAssets: [/app.*.js/],
			minify: {
				collapseWhitespace: true,
				removeComments: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true,
				useShortDoctype: true,
			}
		}),
		new HtmlWebpackExcludeAssetsPlugin(),
		new HtmlInlineSourcePlugin(),
		new FaviconsWebpackPlugin({
			logo: './src/img/favicon.png',
			prefix: 'assets/icon/[hash]/',
			emitStats: true,
			statsFilename: 'assets/icon/iconstats-[hash].json',
			persistentCache: true,
			inject: true,
			background: app.colorbkg,
			title: app.title,
			icons: {
				android: true,
				appleIcon: true,
				appleStartup: true,
				coast: false,
				favicons: true,
				firefox: true,
				opengraph: false,
				twitter: true,
				yandex: false,
				windows: false
			}
		}),
		new AsyncStylesheetPlugin({
			preloadPolyfill: true
		}),
		new LiveReloadPlugin(),
		new MiniCssExtractPlugin(),
		new WebpackPwaManifest({
			name: app.title,
			short_name: app.title.replace(' ', ''),
			description: app.description,
			theme_color: app.color,
			background_color: app.colorbkg,
			display: "browser",
			crossorigin: 'use-credentials',
			icons: [
				{
					src: path.resolve('./src/img/favicon.png'),
					sizes: [96, 128, 192, 256, 384, 512],
					destination: path.join('assets', 'icon'),
					ios: true
				}
			]
		}),
		new GenerateSW({
			importWorkboxFrom: 'local',
			include: [/\.html$/, /\.js$/, /\.css$/],
			importsDirectory: 'wb-assets',
			exclude: [/inline\.css$/],
			runtimeCaching: [
				{
					urlPattern: new RegExp('^https://api\.nico\.dev/'),
					handler: 'networkFirst',
					options: {
						cacheName: 'api-rest-cache'
					}
				}, {
					urlPattern: new RegExp(/\.(?:png|gif|jpg|svg|ico|webp)$/),
					handler: 'cacheFirst',
					options: {
						cacheName: 'image-cache'
					}
				}, {
					urlPattern: new RegExp(/\.html$/),
					handler: 'networkFirst',
					options: {
						cacheName: 'index-cache'
					}
				}
			],
			navigateFallback: 'index.html',
			skipWaiting: true,
		}),
		new RobotstxtPlugin({
			sitemap: "https://nico.dev/sitemap.xml",
			host: "https://nico.dev"
		}),
		new SitemapPlugin('https://nico.dev', [
			'/blog/',
			'/talks/',
			'/code/',
			'/privacy/',
			'/legal/',
			'/app/'
		])
	]
};