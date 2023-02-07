import * as path from 'path'
import * as webpack from 'webpack'
import 'webpack-dev-server'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const config: webpack.Configuration = {
  mode: 'development',
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
    assetModuleFilename: 'images/[hash][ext][query]',
  },
  devServer: {
    client: {
      overlay: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.css/i,
        use: [
          {
            loader: 'style-loader',
          },
          'css-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        type: 'asset/resource',
      },
      {
        test: /\.tsx?$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'tsx',
          target: 'esnext',
        },
      },
    ],
  },
  optimization: {
    emitOnErrors: true,
    minimize: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom',
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
}

export default config
