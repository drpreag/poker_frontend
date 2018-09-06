'use strict'

const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'development',
  entry: [
    './src/main.js'
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
         options: {
             loaders: {
                 'scss': 'vue-style-loader!css-loader!sass-loader',
                 'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
             }
        }        
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }      
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}

