<template>
  <div id="app">
    <div class="nav">
      <HeadNav></HeadNav>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import HeadNav from "@/components/HeadNav.vue";
export default {
  components: {
    HeadNav
  }
};
</script>
<style lang="scss" >
#app {
  width: 100vw;
  height: 100vh;
  // position: relative;
  // background-color: #ff0;
  .nav {
    height: 70px;
    width: 100%;
  }
  .main {
    // calc计算符号两边一定要有空格，否则无效
    height: calc(100% - 70px);
    width: 100%;
  }
}
</style>
