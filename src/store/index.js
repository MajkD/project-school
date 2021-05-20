module.exports = {
  state: {
    loggedIn: false
  },
  mutations: {
    login (state) {
      state.loggedIn = true
    }
  }
}