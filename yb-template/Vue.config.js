module.exports = {
    baseUrl:"./",
    outputDir:"dist",
    assetsDir:"assets",
    indexPath:"index.html",
    filenameHashing:true,
    pages:undefined,
    lintOnSave:true,
    runtimeCompiler:false,
    transpileDependencies:[],
    productionSourceMap:false,
    crossorigin:undefined,
    integrity:false,
    devServer:{//代理
        port:8086,
        proxy:'http://192.168.255.201:8082'
    },
    configureWebpack: config => {
    config.entry.app = './src/main1.js'
    }
    }