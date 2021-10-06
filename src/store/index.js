const Vue = require('vue')

function exists(group) {
  return group.text === payLoad.value
}

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
    addNewGroup (state, payLoad) {
      state.groupData.push({
        text: payLoad.value
      })
    }
  }
}