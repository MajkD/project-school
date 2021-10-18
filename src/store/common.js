export default {
  state: {
    loggedIn: false,
    modal: {
      visible: false,
      type: ''
    }
  },
  actions: {
    setLoggedIn({ state, commit, dispatch, rootGetters }, payLoad) {
      commit('mutateLoggedIn', payLoad)
    },
    setModal({ state, commit, dispatch, rootGetters }, payLoad) {
      commit('mutateModal', payLoad)
    }
  },
  mutations: {
    mutateLoggedIn(state, payLoad) {
      state.loggedIn = payLoad.value
    },
    mutateModal(state, payLoad) {
      state.modal.visible = payLoad.visible
      state.modal.type = payLoad.modalType
    },
    message (state, payLoad) {}
  }
}