const state = {
  currentCounter: 0
}

const getters = { }

const actions = {
  increaseCounter: ({ commit, state }, payload) => {
    commit('INCREASE_CURRENT_COUNTER')
  }
}

const mutations = {
  INCREASE_CURRENT_COUNTER (state, payload) {
    state.currentCounter++
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
