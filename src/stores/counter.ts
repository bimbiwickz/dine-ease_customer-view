import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { createStore } from 'vuex'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

const store = createStore({
  state() {
    return {
      loggedIn: false // Initial value
    }
  },
  mutations: {
    setLoggedIn(state: any, value: null) {
      state.loggedIn = value
    }
  },
  actions: {
    login({ commit }) {
      // Perform login logic
      commit('setLoggedIn', true)
    },
    logout({ commit }) {
      // Perform logout logic
      commit('setLoggedIn', false)
    }
  }
})

export default store
