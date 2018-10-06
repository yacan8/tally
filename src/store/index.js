// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'
import tallyStore from './tallyStore';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    menuKey: 'tally',
    
  },
  mutations: {
    setMenuKey: (state, key) => {
      if (state.menuKey != key) {
        state.menuKey = key;
      }
    }
  },
  modules: {
    tallyStore
  }
})

export default store
