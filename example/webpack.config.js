var path = require('path');

module.exports = {
	context: __dirname,
	entry: { app: './gighy.js' },
	devtool: 'inline-source-map',
	output: {
		filename: './example/public/bundle.js',
		publicPath: 'public'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader'
			},
			{
				test: /\.json$/, loader: 'json', exclude: /node_modules/,
			}
		]
	}
};
