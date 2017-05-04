'use strict';

const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'public/scripts');
const APP_DIR = path.resolve(__dirname, 'src');
const PUBLIC_DIR = path.resolve(__dirname, 'public');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const ReactStaticPlugin = require('react-static-webpack-plugin');


// put all the code of these packages in a single file
const VENDOR_LIBS = [
	'react',
	'react-dom',
	'react-router',
	'react-helmet'
];


const WebpackConfig = {

	entry: {
		bundle: APP_DIR + '/app.js', // this is our entry file
		vendor: VENDOR_LIBS // specifying which and all libraries the vendor file will contain
	},

	output: {
		path: PUBLIC_DIR, // output directory

		// place the generated files in /public/scripts directory and name them accordingly.
		filename: 'scripts/[name].[chunkhash].js',
		// chunk files, place them in /public/scripts directory and name them accordingly.
		chunkFilename: 'scripts/[name].[chunkhash].chunk.js',

		// path where the generated code chunks will be, in our case its the same dir.
		publicPath: '/',
	},


	// include all these modules.
	// these modules will compile our code so we can use it in the browser.
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'eslint-loader',
				include : APP_DIR
			},
			{
				loader: 'babel-loader',
				test: /\.js$/,
				exclude: /node_modules/,
				include : APP_DIR,
				options: {
					presets: [ ['env',{ modules: false }], 'react' ],
					plugins: [ 'lodash', [ 'import', { libraryName: 'antd', style: 'css' } ], 'syntax-dynamic-import' ]
				}
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					use: ['css-loader', 'sass-loader']
				}),
			},
			{
				use: ExtractTextPlugin.extract({
					use: 'css-loader',
				}),
				test: /\.css$/
			},
			{
				loader: 'json-loader',
				test: /\.json$/
			}
		],
	},


	// load all these plugins
	plugins: [

		new ExtractTextPlugin({
			filename: 'styles.css',
			allChunks: true
		}),

		new webpack.optimize.CommonsChunkPlugin({
			names: ['vendor', 'manifest'],
			minChunks: Infinity,
		}),

		new HTMLWebpackPlugin({
			inject: false,
			filename: '200.html',
			template: 'scripts/200.ejs',
			minify: {
				collapseBooleanAttributes: true,
				removeComments: true,
				collapseWhitespace: true,
			}
		}),

		process.env.NODE_ENV !== 'production' ? () => {} : new webpack.optimize.UglifyJsPlugin({
			beautify: false,
			mangle: {
				screw_ie8: true,
				// keep_fnames: true
			},
			sourceMap: false,
			compress: {
				warnings: false,
				screw_ie8: true
			},
			comments: false
		}),

		process.env.NODE_ENV !== 'production' ? () => {} : new ReactStaticPlugin({
			routes: './src/static/routes.js',
			template: './src/static/template.js',
		}),

		process.env.NODE_ENV !== 'production' ? () => {} : new webpack.optimize.AggressiveMergingPlugin(),

		process.env.NODE_ENV !== 'production' ? () => {} : new CompressionPlugin({
			asset: "[path].gz[query]",
			algorithm: "gzip",
			test: /\.(js|html)$/,
			threshold: 10240,
			minRatio: 0.8
		}),

	],

	// this will resolve the path in the components we will write
	// this will help us get rid of the ugly  Ex: '../../filetoinclude' syntax and we can just say app/file to import it.
	resolve: {
		alias: {
			app: APP_DIR,
			public: PUBLIC_DIR,
		},
		extensions: [ '.js', '.json' ]
	},

};

module.exports = WebpackConfig;

