<template>
  <div class="login">
    <div class="bg"></div>
    <Panel />
  </div>
</template>

<script lang="ts" setup>
import Panel from "./components/Panel.vue"
</script>

<style lang="less" scoped>
.login {
  .bg {
    position: absolute;
    background-image: url("../../assets/images/Isarwinkel.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.6;
  }
  
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
