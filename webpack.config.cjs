const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.mjs',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // 🔄 Clean dist/ before each build
  },
  module: {
    rules: [
      {
        test: /\.m?js$/, // ✅ Handle .js and .mjs files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { modules: false }]],
          },
        },
      },
      {
        test: /\.css$/, // 🎨 Handle CSS imports
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // 🧾 Use your custom HTML
      filename: 'index.html',       // 🛠️ Output name
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // Optional: serve static assets from /public
    },
    port: 8080,
    open: true,      // 🔓 Auto-open browser
    hot: true,       // 🔥 Enable HMR (Hot Module Replacement)
  },
};
