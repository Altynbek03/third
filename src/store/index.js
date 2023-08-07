import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: []
  },
  getters: {
  },
  mutations: {
    createTask(state, task) {
        state.tasks.push(task)
    }
  },
  actions: {
  },
  modules: {
  }
})
