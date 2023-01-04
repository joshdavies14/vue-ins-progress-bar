const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    entry: './src/index.js', 
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'vue-ins-progress-bar.js',
        libraryTarget: 'umd', 
        library: 'vueInsProgressBar'
    },
    module: {
        rules:[
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: 'babel-loader',
            },
            {   test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: { importLoaders: 1 },
                    }
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}