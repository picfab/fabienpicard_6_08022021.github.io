const path = require('path')
module.exports = {
    entry: {
        home: './src/index.js',
        photographes: './src/photographes.js',
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, '/dist'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
}
