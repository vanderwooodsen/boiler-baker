module.exports = {
  entry: './client/index.js', // assumes your entry point is the index.js in the root of your project folder
  mode: 'development',
  output: {
    path: __dirname + '/public/', // assumes your bundle.js will also be in the root of your project folder
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      // use the style-loader/css-loader combos for anything matching the .css extension
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      }
    ]
  }
};

