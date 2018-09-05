<template>
<div>
  <navbar></navbar>
</div>
</template>

<script>
import navbar from '@/components/navbar'

export default {
  data() {
    return {
      motto: 'Hello World',
      userInfo: {}
    }
  },

  components: {
    navbar
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
  }
}
</script>

<style scoped>
</style>
