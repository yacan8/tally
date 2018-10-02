<template>
<div class="main">
  <stats v-if="menuKey === 'stats'"></stats>
  <tally v-if="menuKey === 'tally'"></tally>
  <user v-if="menuKey === 'user'"></user>
  <navbar></navbar>
</div>
</template>

<script>
import navbar from '@/components/navbar';
import tally from './tally/index';
import stats from './stats/index';
import user from './user/index';

export default {
  data() {
    return {
      userInfo: {}
    }
  },

  components: {
    navbar,
    tally,
    stats,
    user
  },

  methods: {
    bindViewTap() {
      const url = '../logs/main'
      wx.navigateTo({
        url
      })
    },
    getUserInfo() {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle(msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },

  created() {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  },
  computed: {
    menuKey: function() {
      return this.$store.state.menuKey;
    }
  }
}
</script>

<style scoped>
</style>
