const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const StatsPlugin = require("stats-webpack-plugin");

const common = require("./webpack.common");

module.exports = {
	...common,
	mode: "production",
	module: {
		rules: [
			...common.module.rules,
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
				],
			},
		],
	},
	devtool: "source-map",
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name]-[contenthash].css",
		}),
		new StatsPlugin("../build-stats.json"),
	],
	output: {
		filename: "[name]-[contenthash].js",
		path: path.resolve(__dirname, "prod"),
	},
};