import Vue from 'vue'
import App from './App.vue'
import VueSocketIO from 'vue-socket.io'
import VueSelectImage from 'vue-select-image'
require('vue-select-image/dist/vue-select-image.css')

Vue.use(new VueSocketIO({
  connection: 'http://localhost:3000'
}))

Vue.use(VueSelectImage)

new Vue({
  el: '#app',
  render: h => h(App)
})
