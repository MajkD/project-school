import Vue from "vue"
import Vuex from 'vuex'
import App from "./App.vue"
import router from "./router"
const basicStore = require('./store')

Vue.use(Vuex)

const store = new Vuex.Store(basicStore)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app")