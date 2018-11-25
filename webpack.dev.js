const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const common = require("./webpack.common");

module.exports = {
	...common,
	mode: "development",
	module: {
		rules: [
			...common.module.rules,
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
		],
	},
	devtool: "inline-source-map",
	devServer: {
		contentBase: "./dev",
	},
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dev"),
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "src/index.html",
		}),
	],
};