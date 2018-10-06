<template>
<view class="input-wraper">
  <view class="input-desc">
    <text class="label">备注：</text>
    <input class="desc"/>
    <text class="money">{{money}}</text>
  </view>
  <view class="number-input">
    <view class="number-input-item" hover-class="input-hover" hover-stay-time="50" @click="momenyEdit('1')">
      <span>1</span>
    </view>
    <view class="number-input-item" hover-class="input-hover" hover-stay-time="50" @click="momenyEdit('2')">
      <span>2</span>
    </view>
    <view class="number-input-item" hover-class="input-hover" hover-stay-time="50" @click="momenyEdit('3')">
      <span>3</span>
    </view>
    <view class="number-input-item" hover-class="input-hover" hover-stay-time="50" @click="momenyEdit('4')">
      <span>4</span>
    </view>
    <view class="number-input-item" hover-class="input-hover" hover-stay-time="50" @click="momenyEdit('5')">
      <span>5</span>
    </view>
    <view class="number-input-item" hover-class="input-hover" hover-stay-time="50" @click="momenyEdit('6')">
      <span>6</span>
    </view>

    <view class="number-input-item" hover-class="input-hover" hover-stay-time="50" @click="momenyEdit('7')">
      <span>7</span>
    </view>
    <view class="number-input-item" hover-class="input-hover" hover-stay-time="50" @click="momenyEdit('8')">
      <span>8</span>
    </view>
    <view class="number-input-item" hover-class="input-hover" hover-stay-time="50" @click="momenyEdit('9')">
      <span>9</span>
    </view>

    <view class="number-input-item" hover-class="input-hover" hover-stay-time="50" @click="momenyEdit('.')">
      <span>·</span>
    </view>
    <view class="number-input-item" hover-class="input-hover" hover-stay-time="50" @click="momenyEdit('0')">
      <span>0</span>
    </view>
    <view class="number-input-item" hover-class="input-hover" hover-stay-time="50" @click="momenyEdit('delete')">
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
    <view class="affirm" rowspan="3" hover-class="affirm-hover" hover-stay-time="50">
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
      money: '0',
      dateFormat
    }
  },
  methods: {
    bindDateChange(e) {
      this.date = e.mp.detail.value;
    },
    momenyEdit(key) {
      let money = this.money;
      if (key !== 'delete') {
        if (key === '.') {
          if (money == '0' || money.indexOf('.') === -1) {
            money = money + key;
          }
        } else if (key == '0') {
          if (money !== '0') {
            money = money + key;
          }
        } else {
          if (money == '0') {
            money = key;
          } else {
            money = money + key;
          }
        }
        this.money = money;
      } else {
        if (money.length == 1) {
          money = '0';
        } else {
          money = money.substr(0, money.length - 1);
        }
      }

      if (money.indexOf('.') > -1 && money.split('.')[1].length > 2) {
        money = Math.floor(money * 100) / 100 + '';
      }

      this.money = money;
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
@desc-height: @td-height;
@desc-label-width: 116rpx;
@money-text-width: 200rpx;

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
  height: @td-height * 4 + @desc-height;
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;

  .input-desc {
    .border-style();
    width: 100%;
    border-width: 1rpx 0 0 0;
    height: @desc-height;
    display: flex;
    .label, .money {
      padding: 0 20rpx;
      display: block;
      // height: @desc-height;
      line-height: @desc-height;
    }
    .label {
      width: @desc-label-width;
      color: #999;
    }
    .money {
      text-align: right;
      overflow: hidden;
      color: #333;
      width: @money-text-width;
      font-size: 20px;
    }
    .desc {
      border: 0;
      outline: none;
      display: inline-block;
      // width: ~'calc(100% - @{desc-label-width} - @{money-text-width})';
      // width: 100%;
      height: 100%;
    }

  }
  
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
    &-item.input-hover {
      background-color: #eee;
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

      &-hover {
        background-color: @primary-6;
      }
    }

  }
}
</style>
