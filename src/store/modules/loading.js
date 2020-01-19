// initial state
const state = {
  loading: false
}


// mutations
const mutations = {
  showLoading (state, status) {
    state.loading = status
	},
	hideLoading (state, status) {
    state.loading = status
  }
}

export default {
  namespaced: true,
	state,
  mutations
}