import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import hzqTool from 'hzq-tool'
import hzqAxios from 'hzq-axios'

import './components/global'

Vue.use(hzqTool)

Vue.use(hzqAxios, require['context']('@/apiUrl', true, /\.ts$/), {
    baseURL: 'https://open-api.beone.app'
})

Vue.config.productionTip = false

// 全局方法 this. 的调用方式
declare module 'vue/types/vue' {
    interface Vue {
        $tool: any
        $api: any
    }
}

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
