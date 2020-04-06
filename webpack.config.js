const path = require('path');

module.exports = {
    context: __dirname,
    entry: './frontend/unlimitlist.jsx', // only flie webpack looks at directly
    output: {
        path: path.resolve(__dirname, 'app', 'assets', 'javascripts'), // figuring out where we are in the machine
        filename: 'bundle.js', // the bundled js file that is produced by webpack
    },
    resolve: {
        extensions: ['.js', '.jsx', '*']
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/env', '@babel/react']
                }
            },
        }]
    },
    devtool: 'source-map'
};