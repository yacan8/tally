<template>
<div class="box">
<div class="home_top">
</div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.box{
  position: fixed;
  width: 100%;
  margin:auto;
  overflow:hidden;
  z-index: -1;
}


.home_top{
  position: relative;
  width:100%;
  height:100px;
  text-align:center;
  line-height:50px;
}


.home_top:after {
  width: 140%;
  height: 100px;
  position: absolute;
  left: -20%;
  top:0;
  z-index: -1;
  content: '';
  border-radius: 0 0 50% 50%;
  background-color: #db3e00;
  /* background:linear-gradient(#db3e00,#d8690e); */
}
</style>
