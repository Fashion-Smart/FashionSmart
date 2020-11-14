var path = require("path")

module.exports = {
    entry: {
        path: path.resolve(__dirname + "/frontend/scripts/home.js")
    },
    
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname + "/frontend/public")
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
                plugins: [
                  ["@babel/plugin-proposal-class-properties", { "loose": true }]
                ],
                presets: ["@babel/preset-react", "@babel/preset-env",]
            },
          }
        }
      ]
    },

    mode: 'development'
  };