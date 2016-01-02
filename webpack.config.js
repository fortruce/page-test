/**** WARNING: ES5 code only here. Not transpiled ****/

/**
 * External dependencies
 */

var webpack = require('webpack');

/**
 * Internal dependencies
 */

webpackConfig = {
	cache: true,
	entry: {},
	output: {
		path: path.join(__dirname, 'public')
		filename: '[name].[hash].js',
		chunkFilename: '[name].[chunkhash].js'
	},
	module: {
		loaders: []
	},
	resolve: {
		extensions: [ '', '.js' ]
	}
};

var jsLoader = {
	test: /\.js$/,
	exclude: /node_modules/,
	loaders: [ 'babel?cacheDirectory' ]
};

if (NODE_ENV === 'development') {
	// Add hot module replace
}

webpackConfig.module.loaders = [ jsLoader ].concat(webpackConfig.module.loaders);

module.exports = webpackConfig;
