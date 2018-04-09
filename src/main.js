import Vue from 'vue'
import App from './App'
import router from './config/routes'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.http.options.emulateHTTP=true

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
