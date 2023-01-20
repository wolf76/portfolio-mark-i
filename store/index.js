import Vue from 'vue'
import Vuex from 'vuex'

import { actions, getters, mutations, state } from './root'

Vue.use(Vuex)

export default () =>
  new Vuex.Store({
    modules: {},
    actions: actions,
    getters: getters,
    mutations: mutations,
    state: state,
  })
