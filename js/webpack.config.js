module.exports = {
    entry: {
        home: './src/index.js',
        photographes: './src/photographes.js',
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist',
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
