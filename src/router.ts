import Vue from 'vue'
import Router from 'vue-router'
import routes from './router/routes'
Vue.use(Router)
routes.unshift({ path: '/', redirect: '/test' })
export default new Router({ routes })
