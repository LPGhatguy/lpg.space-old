const path = require("path");

const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const StatsPlugin = require("stats-webpack-plugin");

const common = require("./webpack.common");

module.exports = merge(common, {
	mode: "production",
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name]-[contenthash].css",
		}),
		new StatsPlugin("../build-stats.json"),
	],
	devtool: "source-map",
	output: {
		filename: "[name]-[contenthash].js",
		path: path.resolve(__dirname, "prod"),
	},
});