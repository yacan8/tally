<template>
<view>
<view>
  <img src="/static/images/comingSoon.svg" style="width: 30vw; height: 30vw; margin: 100px 0 30px 35vw;opacity:0.5;">
</view>
<view style="text-align: center;">
  <text>敬请期待</text>
</view>
</view>
</template>
<script>
import topTg from '@/components/top-bg';

export default {
  data() {
    return {
      date: '2016-09-01',
    }
  },
  components: {
    'top-bg': topTg
  },
  methods: {
    bindDateChange(e) {
      console.log(e);
      this.date = e.mp.detail.value;
    }
  }
}
</script>
<style lang="less">

</style>
