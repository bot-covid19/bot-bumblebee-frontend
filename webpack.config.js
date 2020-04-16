const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      core: path.resolve(__dirname, './src/core/'),
      static: path.resolve(__dirname, './public/'),
      components: path.resolve(__dirname, './src/components/'),
      lib: path.resolve(__dirname, './src/lib/'),
      containers: path.resolve(__dirname, './src/containers/'),
      utils: path.resolve(__dirname, './src/utils/'),
      services: path.resolve(__dirname, './src/services/'),
      hooks: path.resolve(__dirname, './src/hooks/'),
      contexts: path.resolve(__dirname, './src/contexts/')
    }
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: './dist/index.html',
      hash: true
    }),
    new webpack.DefinePlugin({
      'HOMEPAGE': JSON.stringify('/'),
      'process.env.NODE_ENV': JSON.stringify('development'),
      'BASE_API_URL': JSON.stringify('https://localhost:8010/api/')
    })
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 3000,
    inline: true,
    historyApiFallback: true
  }
};
