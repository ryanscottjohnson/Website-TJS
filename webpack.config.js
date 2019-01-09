const HtmlPlugin = require('html-webpack-plugin');

const config = {
  mode: 'development',
  entry: './client/src/main.jsx',
  devServer: {
    historyApiFallback: true
  },
  output: {
    path: `${__dirname}/client/dist`,
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  plugins: [new HtmlPlugin({template: __dirname + '/index.html'})],
  module: {
    rules: [
      {
        test: /\.jsx?$/, 
        exclude: /node_modules/,
        loader: 'babel-loader', 
        options: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.(scss|css)$/,

        loader: [
        "style-loader",
        "css-loader",
        "sass-loader",
        "postcss-loader"
      ]},
      { 
        test: /\.(png|jpg|gif)$/, 
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              useRelativePath: true
            }  
          }
        ]
      },
    ]
  },
  resolve: {
      extensions: [".js", ".jsx", ".json"]
  }
}

module.exports = config;