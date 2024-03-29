import { resolve } from 'path';

export const mode = 'development';
export const entry = './src/index.js';
export const devtool = 'inline-source-map';
export const devServer = {
	static: './dist'
};
export const output = {
	filename: 'main.js',
	path: resolve(__dirname, 'dist')
};
export const module = {
	rules: [
		{
			test: /\.css$/i,
			use: ['style-loader', 'css-loader']
		},
		{
			test: /\.(png|svg|jpg|jpeg|gif)$/i,
			type: 'asset/resource'
		}
	]
};
