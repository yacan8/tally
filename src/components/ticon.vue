<template>
  <i :class="['iconfont', 'icon-'+ type]"></i>
</template>
<script>
import '@/style/iconfont';
export default {
  props: ['type']
}
</script>

