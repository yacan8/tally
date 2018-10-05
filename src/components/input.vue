<template>
<view class="input-wraper">
  <view class="number-input">
    <view class="number-input-item">
      <span>1</span>
    </view>
    <view class="number-input-item">
      <span>2</span>
    </view>
    <view class="number-input-item">
      <span>3</span>
    </view>
    <view class="number-input-item">
      <span>4</span>
    </view>
    <view class="number-input-item">
      <span>5</span>
    </view>
    <view class="number-input-item">
      <span>6</span>
    </view>

    <view class="number-input-item">
      <span>7</span>
    </view>
    <view class="number-input-item">
      <span>8</span>
    </view>
    <view class="number-input-item">
      <span>9</span>
    </view>

    <view class="number-input-item">
      <span>·</span>
    </view>
    <view class="number-input-item">
      <span>0</span>
    </view>
    <view class="number-input-item">
      <span>删除</span>
    </view>
  </view>

  <view class="operate-wraper">
    <view class="date">
      <picker mode="date" :value="date" :end="endDate" @change="bindDateChange($event)">
        <view class="picker">
          {{date === endDate ? '今天' : formatDate}}
        </view>
      </picker>
    </view>
    <view class="affirm" rowspan="3">
      <span>确认</span>
    </view>
  </view>
</view>
  
</template>

<script>
import moment from 'moment';

const dateFormat = 'YYYY-MM-DD';

export default {
  data() {
    return {
      endDate: moment().format(dateFormat),
      date: moment().format(dateFormat),
      dateFormat
    }
  },
  methods: {
    bindDateChange(e) {
      this.date = e.mp.detail.value;
    }
  },
  computed: {
    formatDate() {
      return moment(this.date, dateFormat).format('YYYY/MM/DD');
    }
  }
}
</script>

<style lang="less">
@import "../style/contants.less";

@td-height: 50px;

.border-style {
  border-style: solid;
  border-color: #ddd;
}


.td-height {
  line-height: @td-height;
  height: @td-height;
}

.input-wraper {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: @td-height * 4;
  display: flex;
  
  .number-input {
    display: flex;
    flex-wrap: wrap;
    width: ~'calc(100% - 110px)';
    &-item {
      width: 33.333%;
      text-align: center;
      border-width: 1rpx 1rpx 0 0;
      .border-style();
      box-sizing: border-box;
      .td-height();
    }
    &-item:nth-child(3n) {
      border-right-width: 0;
    }
  }

  .operate-wraper {
    width: 110px;
    text-align: 10px;
    .border-style();
    border-width: 1rpx 0 1rpx 1rpx;
    box-sizing: border-box;
    text-align: center;
    .date {
      .td-height();
    }

    .affirm {
      background-color: @primary-color;
      color: #fff;
      height: @td-height * 3;
      line-height: @td-height * 3;
    }

  }
}
</style>
