<template>
  <view class="tally-main">
    <view class="tally-main-content">
      <view class="d-flex">
        <view class="this-month-expenditure">
          <view class="font-30">{{thisMonthExpenditure}} 元</view>
          <view class="font-12 mt10">9月份支出</view>
        </view>
        <view class="yesterday-expenditure">
          <view class="font-30">{{yesterdayExpenditure}} 元</view>
          <view class="font-12 mt10">昨日支出</view>
        </view>
      </view>
      <view class="mt20">
        <view class="font-12 mt10">9月收入： {{thisMonthIncome}} 元</view>
        <view class="font-12 mt10">上月总计： {{lastMount}} 元</view>
      </view>
    </view>
  </view>
</template>

<script>
import moment from 'moment';
import { dateFormat, monthFormat } from '@/store/contants';

export default {
  data() {
    return {}
  },
  computed: {
    thisMonthExpenditure() {
      return this.$store.getters['tallyStore/monthStat'](null, 'expenditure');
    },
    thisMonthIncome() {
      return this.$store.getters['tallyStore/monthStat'](null, 'income');
    },
    lastMount() {
      const lastMonth = moment().subtract(1, 'months').format(monthFormat);
      return this.$store.getters['tallyStore/monthStat'](lastMonth) + '';
    },
    yesterdayExpenditure() {
      const yesterday = moment().subtract(1, 'days').format(dateFormat);
      return this.$store.getters['tallyStore/dayStat'](yesterday) + '';
    }
  }
}
</script>

<style lang="less">
@import '../../style/mixinx.less';

.tally-main {
  padding: 15px;

  &-content {
    .box-shadow();
    background-color: #fff;
    border-radius: 7px;
    padding: 30px 25px;
  }
  .yesterday-expenditure, .this-month-expenditure {
    width: 50%;
  }
  .yesterday-expenditure {
    text-align: right;
  }
}
</style>
