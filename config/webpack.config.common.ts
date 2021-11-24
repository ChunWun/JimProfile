import webpack from 'webpack';
import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';


const config: webpack.Configuration = {
	entry: path.join( __dirname, '../src/index.tsx' ),
	output: {
		filename: '[name].[contenthash].js',
		assetModuleFilename: 'assets/[name][ext]',
		path: path.join( __dirname, '../dist' ),
		clean: true
	},
	resolve: {
		extensions: [ '.tsx', '.ts', '.js' ],
	},
	plugins: [
		new CopyWebpackPlugin(
			{
				patterns: [
					{ from: "./src/assets", to: "./assets" }
				]
			}
		),
	],
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/i,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-env',
							'@babel/preset-react',
							'@babel/preset-typescript',
						],
					},
				},
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource'
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: { modules: true }
					},
					'sass-loader'
				]
			}
		]
	},
};

export default config;
