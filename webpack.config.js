//Path é recomendado para lidar com os caminhos.
const path = require('path');

module.exports = {
  //arquivo de entrada
  entry: path.resolve(__dirname, 'src', 'index.js'), 
  //arquivo gerado a ser convertido.
  output: { 
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js' 
  },

  devServer: {
    //diretorio que contem os arquivos publicos.
    contentBase: path.resolve(__dirname, 'public'),
  },

  //outro loader para arquivos que nao utilizam o babel.
  module: {
    rules: [ 
      {
        test: /\.js$/, 
        //se o arquivo nao estiver em node_modules, converte com o babel.
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ]
      },
      {
        test: /.*\.(gif|png|jpe?g|ico)$/i,
        use: [
          { loader: 'file-loader' },
        ]
      }
    ]
  }  
}