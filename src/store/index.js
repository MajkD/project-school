const content = require('../content')

module.exports = {
  state: {
    groupData: [
      { text: 'Åk 1'},
      { text: 'Åk 2'},
      { text: 'Åk 3'},
      { text: 'Åk 4'},
    ],
    studentData: [
      { text: 'Mikael Danielsson'},
      { text: 'Johanna Wadenius'},
      { text: 'Bobo Wadenius'},
      { text: 'Jens Wadenius'},
      { text: 'Lisa Danielsson'},
      { text: 'Ole Danielsson'},
      { text: 'Miro Danielsson'},
      { text: 'Mikael Danielsson'},
      { text: 'Johanna Wadenius'},
      { text: 'Bobo Wadenius'},
      { text: 'Jens Wadenius'},
      { text: 'Lisa Danielsson'},
      { text: 'Ole Danielsson'},
      { text: 'Miro Danielsson'},
      { text: 'Mikael Danielsson'},
      { text: 'Johanna Wadenius'},
      { text: 'Bobo Wadenius'},
      { text: 'Jens Wadenius'},
      { text: 'Lisa Danielsson'},
      { text: 'Ole Danielsson'},
      { text: 'Miro Danielsson'},
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
      if (payLoad.entity === 'student') {
        commit('mutateNewStudent', { value: payLoad.value })
        commit('message', { value: content.default.messages.newStudentAdded })
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
    mutateNewStudent (state, payLoad) {
      state.studentData.push({
        text: payLoad.value
      })
    },
    message (state, payLoad) {}
  }
}