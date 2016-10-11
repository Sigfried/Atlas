"use strict";
var path = require('path');
var webpack = require('webpack');

module.exports = {
	target: 'web',
	//context: __dirname + "/js",
	entry: "./js/main",
	output: {
			path: __dirname,
			filename: "bundle.js"
	},
	publicPath: "/",
	resolve: {
		extensions: ['.js', '.jsx', '.css', ''],
		modulesDirectories: [
			'node_modules',
			'', 'js', 
			'js/components', 'js/modules', 'js/sptest',  
			'js/styles', 
			'js/modules/cohortbuilder/css',
			'js/modules/WebAPIProvider',
			'js/modules/databindings',
			'js/components/datasources/app',
		],
	},
	externals: {
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader', // 'babel-loader' is also a valid name to reference
				query: {
					presets: ['es2015', 'es2016'],
					//presets: ['es2015', 'es2015-loose-native-modules', 'stage-1', 'stage-0']
				}
			},
			{
				test   : /\.png/,
				loader: 'url-loader'
			},
		],
	}
}
