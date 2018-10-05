<template>
<div class="nav-wraper">
  <div class="nav">
    <a @click="setMenuKey('stats')" :class="['nav-item', {'active': menuKey === 'stats'}]">
      <span class="nav-item-icon">
        <ticon type="stats"></ticon>
      </span>
      <span class="nav-item-text">统计</span>
    </a>
    <a @click="setMenuKey('tally')" :class="['nav-item', {'active': menuKey === 'tally'}]">
      <span v-if="menuKey === 'tally'" class="add-tally" @click="linkToAddTally($event)">
        <ticon type="plus-square"></ticon>
      </span>
      <span v-if="menuKey !== 'tally'">
        <span class="nav-item-icon">
          <ticon type="tally"></ticon>
        </span>
        <span class="nav-item-text">记账</span>
      </span>
    </a>

    <a @click="setMenuKey('user')" :class="['nav-item', {'active': menuKey === 'user'}]">
      <span class="nav-item-icon">
        <ticon type="user"></ticon>
      </span>
      <span class="nav-item-text">我</span>
    </a>
  </div>
</div>
</template>

<script>
import ticon from '@/components/ticon';

export default {
  data() {
    return {
      
    }
  },
  components: {
    ticon
  },
  methods: {
    setMenuKey(key) {
      this.$store.commit('setMenuKey', key);
    },
    linkToAddTally($event) {
      wx.navigateTo({url: './addTallyEntry/main'})
    }
  },
  computed: {
    menuKey: function() {
      return this.$store.state.menuKey;
    }
  }
}
</script>

<style lang="less">

@border-width: 1px;
@border-style: solid;
@border-color: #f1f1f1;

.border-top {
  border-top: @border-width @border-style @border-color;
}

.nav-wraper {
  .border-top();
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: 10;
  padding: 5px 0;
  .nav {
    display: flex;
    &-item {
      width: 33.3333%;
      display: block;
      text-align: center;
      color: #666;
      .add-tally {
        position: relative;
        background: #fff;
        // .border-top();
        font-size: 36px;
        // margin-top: -20px;
        display: inline-block;
        // padding: 0 5px 0 5px;
      }
      &-icon {
        display: block;
        height: 46rpx;
        i {
          font-size: 26px;
          display: inline-block;
          vertical-align: middle;
        }
      }
      &-text {
        font-size: 10px;
        line-height: 1;
      }
    }
    &-item.active {
      color: #db3e00;
    }
  }
}
</style>
