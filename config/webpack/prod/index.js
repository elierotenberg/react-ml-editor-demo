import path from 'path';
import babelConfig from '../../babel/browser/dev';
import webpack from 'webpack';

const root = path.join(
  __dirname, // /config/webpack/prod
  '..', // /config/webpack
  '..', // /config
  '..', // /
);

export default {
  context: root,
  entry: './app/www/index.js',
  output: {
    path: path.join(root, 'www'),
    filename: 'bundle.min.js',
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
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      'screw-ie8': true,
      screwIe8: true,
      mangle: { except: ['GeneratorFunction'] },
    }),
  ],
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  target: 'web',
  devtool: 'source-map',
};
