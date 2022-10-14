const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'project-name.bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.js', '.json'],
        alias: {
            api: path.join(__dirname, 'src/api/'),
            components: path.join(__dirname, 'src/components/'),
            controllers: path.join(__dirname, 'src/controllers/'),
            core: path.join(__dirname, 'src/core/'),
            pages: path.join(__dirname, 'src/pages/'),
            styles: path.join(__dirname, 'src/styles/'),
            types: path.join(__dirname, 'src/types/'),
            static: path.join(__dirname, 'src/static/'),
            utils: path.join(__dirname, 'src/utils/'),
            hocs: path.join(__dirname, 'src/hocs/'),
        }
    },
    devServer: {
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                },
                exclude: /node_modules/,
            },
            // изображения
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            // шрифты и SVG
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
            {
                test: /\.(handlebars|hbs)$/,
                loader: "handlebars-loader"
            },
            {
                test: /\.(module.css|css)$/i,
                use: ['style-loader', "css-loader",'postcss-loader'],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};