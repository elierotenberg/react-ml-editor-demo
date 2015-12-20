import path from 'path';
import babelConfig from '../../babel/browser/dev';
import webpack from 'webpack';

const root = path.join(
  __dirname, // /config/webpack/dev
  '..', // /config/webpack
  '..', // /config
  '..', // /
);

export default {
  context: root,
  debug: true,
  entry: './app/www/index.js',
  output: {
    path: path.join(root, 'www'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: babelConfig,
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new webpack.optimize.DedupePlugin(),
  ],
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  target: 'web',
  devtool: 'eval-source-map',
};
