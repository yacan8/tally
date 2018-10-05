import Vue from 'vue'
import App from '@/pages/tally/addTally'
import store from '@/store'

const app = new Vue({
  ...App,
  store
})
app.$mount()
