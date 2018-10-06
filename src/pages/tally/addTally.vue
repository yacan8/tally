<template>
<view>
  <view class="income-expenditure-wraper">
    <view class="income-expenditure-btn-wraper">
      <view :class="['income-expenditure-btn', {'active': tallyType === 'expenditure'}]" @click="setTallyType('expenditure')">
        支出
      </view>
      <view :class="['income-expenditure-btn', {'active': tallyType === 'income'}]" @click="setTallyType('income')">
        收入
      </view>
    </view>
  </view>

  <view class="select-type-list-wraper">
    <view class="select-type-list">
      <view :class="['select-type-item', {'active': key === selectType}]" v-bind:key="key" v-for="(value, key) in selectTypes" @click="setSelectType(key)">
        <view class="select-type-item-icon">
          <ticon :type="value.icon"></ticon>
        </view>
        <view class="select-type-item-text">
          {{value.text}}
        </view>
      </view>
    </view>
  </view>

  <tally-input ref="inputComponent" :onOk="onOk"></tally-input>
  
</view>
</template>

<script>
import tallyInput from '@/components/input.vue';
import ticon from '@/components/ticon.vue';
import { expenditureTypes, incomeTypes } from '@/store/contants.js';

export default {

  data() {
    return {
      tallyType: 'expenditure',
      selectTypesWidth: 0,
      selectType: 'eat'
    }
  },

  components: {
    'tally-input': tallyInput,
    ticon
  },
  methods: {
    setType(type) {
      if (this.type !== type) {
        this.type = type;
      }
    },
    setTallyType(tallyType) {
      if (this.tallyType !== tallyType) {
        this.tallyType = tallyType;
        this.selectType = Object.keys(this.selectTypes)[0]
      }
    },
    setSelectType(selectType) {
      if (this.selectType !== selectType) {
        this.selectType = selectType;
      }
    },
    onOk(data) {
      console.log(this.addTally);
      console.log('onOk', data);
    }
  },
  computed: {
    selectTypes() {
      return this.tallyType === 'expenditure' ?  expenditureTypes : incomeTypes;
    }
  }
}
</script>

<style lang="less">
@import '../../style/contants.less';

@income-expenditure-select-height: 30px;
@income-expenditure-select-padding: 5px;
@income-expenditure-select-border-width: 1px;
@header-height: @income-expenditure-select-height + @income-expenditure-select-padding * 2 + @income-expenditure-select-border-width * 2;

.income-expenditure-wraper {
  background-color: @primary-color;
  color: #fff;
  padding: @income-expenditure-select-padding 0;
  position: fixed;
  top: 0;
  width: 100%;
  height: @header-height;
  .income-expenditure-btn-wraper {
    width: 50%;
    margin: 0 auto;
    text-align: center;
    border: @income-expenditure-select-border-width solid #fff;
    display: flex;
    height: @income-expenditure-select-height;
    line-height: @income-expenditure-select-height;
    border-radius: 5px;
    font-size: 12px;
    .income-expenditure-btn {
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

.select-type-list-wraper {
  padding-top: @header-height + 20px;
  .select-type-list {
    display: flex;
    flex-wrap: wrap;
    .select-type-item {
      width: 25vw;
      height: 25vw;
      text-align: center;
      &-icon {
        font-size: 25vw * 0.35;
        line-height: 25vw * 0.5;
        margin: 2vw auto;
        width: 50%;
        height: 50%;
        color: #999;
        background-color: #f6f6f6;
        border-radius: 50%;
      }
      &-text {
        font-size: 12px;
        color: #999;
      }
      &.active {
        .select-type-item-icon {
          color: #fff;
          background-color: @primary-color;
        }
        .select-type-item-text {
          color: #333;
        }
      }
    }
  }
}
</style>