import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/main.scss'

Vue.config.productionTip = false

Vue.filter('capitalize', function (value) {
  return value.toString().charAt(0).toUpperCase() + value.slice(1).toLowerCase()
})

Vue.filter('upperFirst', function (value) {
  return value.toString().charAt(0).toUpperCase() + value.slice(1)
})

Vue.filter('trim', function (value) {
  return value.toString().trim()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
