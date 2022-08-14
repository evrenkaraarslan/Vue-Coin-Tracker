import { createStore } from 'vuex'

export default createStore({
  state: {
    storedCoins: []
  },
  mutations: {
    addCoin: (state, payload) => {
      state.storedCoins.push(payload)
    },
		removeCoin(state, payload) {
			state.storedCoins.splice(state.storedCoins.indexOf(payload), 1)
		}
  } 
})

