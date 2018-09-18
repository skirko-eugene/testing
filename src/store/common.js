export default {
  state: {
    laoding: false,
    error: null
  },
  getters: {
    laoding(state){
      return state.laoding
    },
    error(state){
      return state.error
    }
  },
  mutations: {
    setLoading(state, payload){
      state.loading = payload
    },
    setError(state, payload){
      state.error = payload
    },
    clearError(state){
      state.error = null
    }
  },
  actions: {
    setLoading({commit}, payload){
      commit('setLoading', payload)
    },
    setError({commit}, payload){
      commit('setError', payload)
    },
    clearError({commit}, payload){
      commit('clearError', payload)
    }
  }
}
