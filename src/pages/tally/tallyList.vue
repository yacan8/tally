<template>
  <div class="tally-list">
    <div v-for="(value, key) in list" v-bind:key="value.uuid + key">
      <div v-if="value.isDateItem" class="tally-list-title">
        <span class="mr10">{{value.date}}</span>
        <span>{{value.week}}</span>
        <span class="fr">{{value.total}}</span>
      </div>
      <div v-if="!value.isDateItem" class="tally-item">
        <div class="tally-item-icon">
          <ticon :type="allTypes[value.type].icon"></ticon>
        </div>
        <div class="tally-item-desc">
          {{value.desc || allTypes[value.type].text}}
        </div>
        <div class="tally-item-cost">
          {{value.money}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { allTypes, weeksMap } from '@/store/contants';
import ticon from '@/components/ticon';
import _ from 'lodash';
import moment from 'moment';
import { dateFormat } from '@/store/contants';

export default {
  data() {
    return {
      date: '2016-09-01',
      allTypes
    }
  },
  components: {
    ticon,
  },
  computed: {
    list: function() {
      const list = this.$store.getters['tallyStore/list'];
      let result = [];
      const group = _.groupBy(list, 'date');
      Object.keys(group).sort((a, b) => {
        return moment(b, dateFormat).valueOf() - moment(a, dateFormat).valueOf()
      }).forEach(date => {
        const someDayTallys = group[date];
        const total = _.sumBy(someDayTallys, o => Number(o.money));
        const momentObject = moment(date, dateFormat);
        const week = `星期${weeksMap[momentObject.weekday()]}`;
        const isThisYear = momentObject.format('YYYY') === moment().format('YYYY');
        const dayDesc = {
          total, week, date: momentObject.format(isThisYear ? 'MM月DD日' : 'YYYY年MM月DD日'), isDateItem: true
        }
        result = result.concat(dayDesc, someDayTallys)
      })
      return result;
    }
  }
}
</script>

<style lang="less">
@import '../../style/contants.less';
@import '../../style/mixinx.less';

.tally {
  z-index: -1;
  &-list {
    padding: 0 15px;
    padding-top: 200px;

    &-title {
      font-size:10px;
      margin:10px 0;
      padding-left:10px;
      padding-right: 15px;
      color: #666;

    }
  }
  
  &-item {
    // .box-shadow();
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    padding: 5px 0 0 5px;
    display: flex;
    background: #fff;
    justify-content: space-between;
    line-height: 40px;
    height: 45px;
    // border-radius: 7px;
    overflow: hidden;
    // margin-bottom: 10px;
    font-size: 12px;
    
    // &:last-child {
    //   border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    // }

    &-icon {
      width: 30px;
      height: 30px;
      text-align: center;
      // padding: 20px;
      i {
        display: inline-block;
        background-color: @primary-color;
        color: #eee;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        line-height: 30px;
        margin-top: 5px;
        font-size: 22px;
      }
    }
    &-desc {
      width: ~'calc(100% - 30px - 60px - 5px)';
      padding: 0 5px 0 10px;
    }
    &-cost {
      width: 60px;
      height: 60px;
      text-align: right;
      padding-right: 15px;
      font-size: 12px;
    }
  }
}
</style>
