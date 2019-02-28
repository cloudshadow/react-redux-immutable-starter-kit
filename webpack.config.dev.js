const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map', // show original source. https://webpack.js.org/configuration/devtool/
  entry: [
    // must be first entry to properly set public path
    path.resolve(__dirname, 'src/index.js') // Defining path seems necessary for this to work consistently on Windows machines.
  ],
  output: {
    path: path.resolve(__dirname, 'dist'), // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({     // Create HTML file that includes references to bundled CSS and JS.
      template: 'src/index.ejs',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      inject: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.eot(\?v=\d+.\d+.\d+)?$/,
        //type: 'javascript/auto',
        loader: 'file-loader'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        //type: 'javascript/auto',
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
        //type: 'javascript/auto',
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        //type: 'javascript/auto',
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        //type: 'javascript/auto',
        loader: 'file-loader?name=[name].[ext]'
      },
      {
        test: /\.ico$/,
        //type: 'javascript/auto',
        loader: 'file-loader?name=[name].[ext]'
      },
      {
        test: /(\.css|\.scss|\.sass)$/,
        //type: 'javascript/auto',
        loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    contentBase: path.join(__dirname, "src"),
    inline: true,
    compress: true,
    host: '0.0.0.0',
    port: 4000,
    progress: true,
    open: true,
    hot: true, //see more https://github.com/webpack/webpack/issues/1151
    watchContentBase: true,
    historyApiFallback: true,
  }
};
