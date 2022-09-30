import { createStore } from 'vuex'
import MouduleUser from './user'
import ModulePk from './pk'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user:MouduleUser,
    pk:ModulePk,
  }
})
