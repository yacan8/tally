<template>
  <div>
    <top-bg></top-bg>
    <div class="tally">
      <div class="tally-main">
        <div class="tally-main-content">
          <picker mode="date" :value="date" start="2015-09-01" end="2017-09-01" @change="bindDateChange($event)">
            <view class="picker">
              当前选择: {{date}}
            </view>
          </picker>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import topTg from '@/components/top-bg';
import navbar from '@/components/navbar';

export default {
  data() {
    return {
      date: '2016-09-01',
    }
  },
  components: {
    'top-bg': topTg,
    navbar
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
.tally {
  &-main {
    padding: 15px;

    &-content {
      background-color: #fff;
      min-height: 200px;
      border-radius: 7px;
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
      padding: 10px;
    }
  }
}
</style>
