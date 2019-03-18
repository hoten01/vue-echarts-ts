// vue.config.js
module.exports = {
    configureWebpack: {
        entry: "./src/components/vue-echarts/index.ts",
        output: {
            filename: "vue-echarts-ts.min.js",
            library: "vue-echarts-ts",
            libraryTarget: "umd",
            umdNamedDefine: true,
            // libraryExport: 'default'
        },

    },
    css: {
        extract: false
    }

}