const CompressionPlugin = require('compression-webpack-plugin');
module.exports = {
    outputDir: '../server-koa/public',
    configureWebpack: config => {
        const base = {
            externals: {
                hljs: 'hljs'
            }
        }
        if(process.env.NODE_ENV === 'production') {
            return {
                ...base, 
                plugins: [
                    new CompressionPlugin({
                        test: /\.js$|\.html$|\.css$/,
                        threshold: 20480,
                        minRatio: 0.6
                    })
                ]
            }
        } else {
            return {...base}
        }
    }
}
