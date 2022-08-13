import { createStore } from 'vuex'

export default createStore({
  state () {
    return {
      count: 10
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})