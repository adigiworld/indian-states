import { join } from 'path';

export default {
  mode: 'production', //'production','development'
  context: join(__dirname, 'src'),
  entry: './index',
  output: {
    path: join(__dirname, 'dist'),
    filename: 'index.umd.js',
    library: { // There is also an old syntax for this available (click to show)
      type: "umd", // universal module definition
      // the type of the exported library
      name: "IndianStates", // string | string[]
    },
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".json"]
  }
};
