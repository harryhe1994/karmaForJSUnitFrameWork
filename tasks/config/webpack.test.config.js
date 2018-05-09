var pathUtil = require('../utils/path.util');
var pkg = require('../../package.json');

module.exports = {
    devtool: 'eval-source-map',
    resolve: {
        extensions: ['.js', '.json'],
        alias: {
            '@': pathUtil.resolve('public/javascripts')
        }
    },
    output: {
        path: pathUtil.resolve('target'),
        filename: pkg.name + '.test.js'
    },
    module: {
        rules: [
            // {
            //     test: /\.css$/,
            //     include: [
            //         pathUtil.resolve('public/stylesheets'),
            //         pathUtil.resolve('test/unit')
            //     ],
            //     exclude: [
            //         /node_modules/
            //     ],
            //     use: ['style-loader', 'css-loader']
            // },
            // {
            //     test: /\.(png|jpe?g|gif|svg|ico)$/,
            //     loader: 'url-loader',
            //     options: {
            //         limit: 1000,
            //         useRelativePath: true,
            //         publicPath: './',
            //         name: '[name].[ext]'
            //     }
            // },
            {
                enforce: 'post',
                test:/\.js$/,
                include: [
                    pathUtil.resolve('public/javascripts')
                ],
                exclude: [
                    /node_modules/
                ],
                loader: 'istanbul-instrumenter-loader'
            }
        ]
    }
};