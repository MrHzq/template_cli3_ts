const externals = {
    vue: 'Vue',
    'vue-router': 'VueRouter',
    vuex: 'Vuex',
    axios: 'axios'
}
module.exports = {
    configureWebpack: { externals },
    devServer: { open: true }
}
