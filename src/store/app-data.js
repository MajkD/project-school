const content = require('../content')

export default {
  state: {
    group: {
      selected: 'Åk 3',
      list: [
        { text: 'Åk 1'},
        { text: 'Åk 2'},
        { text: 'Åk 3'},
        { text: 'Åk 4'},
      ]
    },
    student: {
      belongsTo: 'group',
      selected: '',
      list: [
        { text: 'Mikael Danielsson', group: 'Åk 1' },
        { text: 'Johanna Wadenius', group: 'Åk 2'},
        { text: 'Bobo Wadenius', group: 'Åk 2'},
        { text: 'Jens Wadenius', group: 'Åk 2'},
        { text: 'Lisa Danielsson', group: 'Åk 1'},
        { text: 'Ole Danielsson', group: 'Åk 1'},
        { text: 'Miro Danielsson', group: 'Åk 1'},
        { text: 'Test Testsson', group: 'Åk 3'},
        { text: 'Per Persson', group: 'Åk 3'},
        { text: 'Bengt Bengtsson', group: 'Åk 3'},
        { text: 'Pelle Pellesson', group: 'Åk 4'},
        { text: 'Sven Svensson', group: 'Åk 4'},
      ]
    },
    material: {
      selected: 'Skrivning',
      list: [
        { text: 'Läsning'},
        { text: 'Skrivning'},
        { text: 'Matte'},
      ]
    }
  },
  getters: {
    getStudentSelected: state => {
      return state.student.selected !== ''
    }
  },
  actions: {
    add({ state, commit, dispatch, rootGetters }, payLoad) {
      commit('mutateEntity', payLoad)
      commit('message', { value: content.default.messages[payLoad.entity].newAdded })
    },
    setSelected({ state, commit, dispatch, rootGetters }, payLoad) {
      commit('mutateSelected', payLoad)
    }
  },
  mutations: {
    mutateEntity(state, payLoad) {
      let data = {
        text: payLoad.value
      }
      const belongsTo = state[payLoad.entity].belongsTo
      if (belongsTo) {
        data[belongsTo] = state[belongsTo].selected
      }
      state[payLoad.entity].list.push(data)
    },
    mutateSelected(state, payLoad) {
      state[payLoad.entity].selected = payLoad.value
      for(const key in state) {
        const item = state[key]
        if(item.belongsTo === payLoad.entity) {
          const belongingItems = item.list.filter(listItem => {
            return listItem[payLoad.entity] === state[payLoad.entity].selected
          })
          if(belongingItems.length > 0) {
            item.selected = belongingItems[0].text
          } else {
            item.selected = ''
          }
        }
      }
    }
  }
}