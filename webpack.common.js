const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
		app: "./src/index.js",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: path.resolve(__dirname, "node_modules"),
				use: {
					loader: "babel-loader",
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "src/index.html",
		}),
	],
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "output"),
	},
};