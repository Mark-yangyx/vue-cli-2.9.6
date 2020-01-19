// initial state
const state = {
  items: [],
  checkoutStatus: null
}

// getters
const getters = {
  cartTotalPrice: (state, getters) => {
    return ['1'].concat(state.items)
  }
}

// actions
const actions = {
  checkout ({ commit, state }, products) {
    commit('setCheckoutStatus', products)
  },
}

// mutations
const mutations = {
  setCheckoutStatus (state, status) {
    state.checkoutStatus = status
  }
}

export default {
  namespaced: true,
	state,
	actions,
	getters,
  mutations
}