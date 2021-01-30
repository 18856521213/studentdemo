import Vue from 'vue'
//重置css
import '@/assets/css/reset.css'
import '@/assets/css/global.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
