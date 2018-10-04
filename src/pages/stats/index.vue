<template>
  <div>
    <picker mode="date" :value="date" start="2015-09-01" end="2017-09-01" @change="bindDateChange($event)">
      <view class="picker">
        当前选择: {{date}}
      </view>
    </picker>
  </div>
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
