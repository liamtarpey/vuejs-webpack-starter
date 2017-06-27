var path = require('path');

module.exports = {
    entry: './src/index.vue',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    }
};
