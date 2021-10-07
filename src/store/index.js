const content = require('../content')

module.exports = {
  state: {
    groupData: [
      { text: 'Åk 1'},
      { text: 'Åk 2'},
      { text: 'Åk 3'},
      { text: 'Åk 4'},
    ],
    loggedIn: false,
    modal: {
      show: false,
      type: ''
    }
  },
  actions: {
    add({ state, commit, dispatch, rootGetters }, payLoad) {
      if (payLoad.entity === 'group') {
        commit('mutateNewGroup', { value: payLoad.value })
        commit('message', { value: content.default.messages.newGroupAdded })
      }
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
    },
    mutateNewGroup (state, payLoad) {
      state.groupData.push({
        text: payLoad.value
      })
    },
    message (state, payLoad) {
      
    }
  }
}