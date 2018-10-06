<template>
  <div>
    <top-bg></top-bg>
    <div class="tally">
      <div class="tally-main">
        <div class="tally-main-content">
          <div class="this-month-cost">
            <div class="font-30">20.00 元</div>
            <div class="font-12 mt10">9月份支出</div>
          </div>

          <div class="mt20">
            <div class="font-12 mt10">9月收入： 231.99 元</div>
            <div class="font-12 mt10">8月总计： -2131.99 元</div>
          </div>
        </div>
      </div>
      <div class="tally-list">
        <div class="tally-list-title">
          <span>9月份</span>
        </div>
        <div class="tally-item">
          <div class="tally-item-icon">
            <i class="iconfont icon-tally"></i>
          </div>
          <div class="tally-item-desc">
            吃饭
          </div>
          <div class="tally-item-cost">
            12
          </div>
        </div>

        <div class="tally-item">
          <div class="tally-item-icon">
            <i class="iconfont icon-tally"></i>
          </div>
          <div class="tally-item-desc">
            吃饭
          </div>
          <div class="tally-item-cost">
            12
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import topTg from '@/components/top-bg';

export default {
  created() {
    this.getData();
  },
  data() {
    return {
      date: '2016-09-01',
    }
  },
  components: {
    'top-bg': topTg,
  },
  methods: {
    getData() {
      console.log(this);
      this.$store.dispatch('tallyStore/getDataList');
    }
  }
}
</script>
<style lang="less">
@import '../../style/mixinx.less';

.tally {
  &-main {
    padding: 15px;

    &-content {
      .box-shadow();
      background-color: #fff;
      border-radius: 7px;
      padding: 30px 25px;
    }
  }

  &-list {
    padding: 0 15px;

    &-title {
      font-size:12px;
      margin-bottom:10px;
      padding-left:10px;
      color: #666;

    }
  }
  
  &-item {
    .box-shadow();
    border: 1px solid rgba(0, 0, 0, 0.03);
    display: flex;
    justify-content: space-between;
    line-height: 60px;
    height: 60px;
    border-radius: 7px;
    overflow: hidden;
    margin-bottom: 10px;
    

    &-icon {
      width: 60px;
      height: 60px;
      text-align: center;
    }
    &-desc {
      width: ~'calc(100% - 30px - 60px)';
      padding: 0 5px;
    }
    &-cost {
      width: 60px;
      height: 60px;
      text-align: right;
      padding-right: 10px;
    }
  }
}


</style>
