import Vue from 'vue'
import 'normalize.css/normalize.css'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import 'element-ui/lib/theme-chalk/index.css'

import '@/assets/iconfont/iconfont.css'

import '@/styles/index.scss'

// import './permission'

import * as filters from './filters' // global filters

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// import VueiClient from '@supermap/vue-iclient-mapboxgl'
// Vue.use(VueiClient)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
