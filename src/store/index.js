const content = require('../content')

module.exports = {
  state: {
    group: {
      selected: 'Åk 1',
      list: [
        { text: 'Åk 1'},
        { text: 'Åk 2'},
        { text: 'Åk 3'},
        { text: 'Åk 4'},
      ]
    },
    student: {
      selected: 'Mikael Danielsson',
      list: [
        { text: 'Mikael Danielsson'},
        { text: 'Johanna Wadenius'},
        { text: 'Bobo Wadenius'},
        { text: 'Jens Wadenius'},
        { text: 'Lisa Danielsson'},
        { text: 'Ole Danielsson'},
        { text: 'Miro Danielsson'},
        { text: 'Test Testsson'},
        { text: 'Per Persson'},
      ]
    },
    material: {
      selected: 'Läsning',
      list: [
        { text: 'Läsning'},
        { text: 'Skrivning'},
        { text: 'Matte'},
      ]
    },
    loggedIn: false,
    modal: {
      visible: false,
      type: ''
    }
  },
  actions: {
    add({ state, commit, dispatch, rootGetters }, payLoad) {
      commit('mutateEntity', payLoad)
      commit('message', { value: content.default.messages[payLoad.entity].newAdded })
    },
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
    mutateEntity(state, payLoad) {
      state[payLoad.entity].list.push({
        text: payLoad.value
      })
    },
    message (state, payLoad) {}
  }
}