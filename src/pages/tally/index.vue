<template>
  <div>
    <top-bg></top-bg>
    <portal-content></portal-content>
    <div class="tally">
      <tally-list></tally-list>
    </div>
  </div>
</template>
<script>
import topTg from '@/components/top-bg';
import portalContent from './portalContent';
import tallyList from './tallyList';

export default {
  created() {
    this.getData();
  },
  data() {
    return {
    }
  },
  components: {
    'top-bg': topTg,
    'portal-content': portalContent,
    'tally-list': tallyList
  },
  methods: {
    getData() {
      this.$store.dispatch('tallyStore/getDataList');
    }
  },
  
}
</script>
<style lang="less">

</style>
