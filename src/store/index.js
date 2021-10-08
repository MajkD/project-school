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
    materialData: [
      { text: 'Läsning'},
      { text: 'Skrivning'},
      { text: 'Matte'},
    ],
    loggedIn: false,
    modal: {
      visible: false,
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
      if (payLoad.entity === 'material') {
        commit('mutateNewMaterial', { value: payLoad.value })
        commit('message', { value: content.default.messages.newMaterialAdded })
      }
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
    mutateNewMaterial (state, payLoad) {
      state.materialData.push({
        text: payLoad.value
      })
    },
    message (state, payLoad) {}
  }
}