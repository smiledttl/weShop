import Vue from 'vue'
import App from './App'
import router from './config/routes'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
