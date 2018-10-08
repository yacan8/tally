<template>
  <div>
    我的中心
    <button @click="clear">清理</button>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    clear() {
      wx.clearStorageSync();
    }
  }
}
</script>
