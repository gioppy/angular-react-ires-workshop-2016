var webpack = require('webpack');
module.exports = {
  entry: [
    'script!firebase/firebase.js',
    'script!reactfire/dist/reactfire.min.js',
    'script!./src/api/firebase.js',
    './src/app.jsx'
  ],
  output: {
    path: __dirname + '/dist/',
    filename: 'bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'src/components/Main.jsx',
      Button: 'src/components/shared/Button.jsx',
      Scores: 'src/components/Scores/Scores.jsx',
      ScoresControls: 'src/components/Scores/ScoresControls.jsx',
      ScoresPlayers: 'src/components/Scores/ScoresPlayers.jsx',
      PlayerAdd: 'src/components/PlayerAdd/PlayerAdd.jsx',
      PlayerAddColors: 'src/components/PlayerAdd/PlayerAddColors.jsx',
      PlayerAddForm: 'src/components/PlayerAdd/PlayerAddForm.jsx',
      Player: 'src/components/Player/Player.jsx',
      firebaseApi: 'src/api/firebase.jsx',
      reactfireApi: 'src/api/reactfire.jsx',
      appStyle: 'src/scss/app.scss'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      },
      {
        loader: 'url-loader',
        test: /\.(png|jpg|svg)$/
      }
    ]
  }
};