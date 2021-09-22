module.exports = {
  state: {
    loggedIn: false,
    modal: {
      show: false,
      type: ''
    }
  },
  mutations: {
    setLoggedIn(state) {
      state.loggedIn = true
    },
    showModal(state, payLoad) {
      state.modal.show = true
      state.modal.type = payLoad.modalType
    },
    hideMdal(state) {
      state.modal.show = false
    }
  }
}