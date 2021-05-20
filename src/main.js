import Vue from "vue"
import Vuex from 'vuex'
import App from "./App.vue"
import router from "./router"
const store = require('./store')

Vue.use(Vuex)

const newStore = new Vuex.Store(store)

new Vue({
  router,
  render: (h) => h(App),
  newStore
}).$mount("#app")