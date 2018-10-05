<template>
<view>
  <view class="income-expanditure-wraper">
    <view class="income-expanditure-btn-wraper">
      <view :class="['income-expanditure-btn', {'active': type === 'expanditure'}]" @click="setType('expanditure')">
        支出
      </view>
      <view :class="['income-expanditure-btn', {'active': type === 'income'}]" @click="setType('income')">
        收入
      </view>
    </view>
  </view>

  <tally-input></tally-input>
  fadsa
</view>
</template>

<script>
import tallyInput from '@/components/input.vue';

export default {
  data() {
    return {
      type: 'expanditure'
    }
  },
  components: {
    'tally-input': tallyInput
  },
  methods: {
    setType(type) {
      if (this.type !== type) {
        this.type = type;
      }
    }
  }
}
</script>

<style lang="less">
@import '../../style/contants.less';
.income-expanditure-wraper {
  background-color: @primary-color;
  color: #fff;
  padding: 5px 0;
  position: absolute;
  top: 0;
  width: 100%;
  height: 42px;
  .income-expanditure-btn-wraper {
    width: 50%;
    margin: 0 auto;
    text-align: center;
    border: 1px solid #fff;
    display: flex;
    height: 30px;
    line-height: 30px;
    border-radius: 5px;
    font-size: 12px;
    .income-expanditure-btn {
      width: 50%;
      color: #fff;
      background-color: @primary-color;
      &.active {
        color: @primary-color;
        background-color: #fff;
      }
      &:first-child {
        border-radius: 4px 0 0 4px;
      }
      &:last-child {
        border-radius: 0 4px 4px 0;
      }
    }
  }
}

</style>