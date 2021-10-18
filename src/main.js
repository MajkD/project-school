import Vue from "vue"
import Vuex from 'vuex'
import App from "./App.vue"
import router from "./router"
import modules from './store'
Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  modules
})

console.log(store)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app")