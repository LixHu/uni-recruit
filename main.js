import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

// 引入全局uView
import uView from 'uview-ui'

import Api from 'api/index.js'
Vue.use(uView);
const url = 'http://recruit-back.test'
const api = new Api(url)
Vue.prototype.api = api
const app = new Vue({
    ...App
})
app.$mount()
