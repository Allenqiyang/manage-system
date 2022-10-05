<template>
  <div class="app">
    <h2>{{ $store.state.name }}</h2>
    <router-link to="/login">Login</router-link>
    <router-link to="/main">Home</router-link>
    <router-view></router-view>
    <el-button>yeah</el-button>
    <el-button type="success">yeah</el-button>
    <el-button type="danger">yeah</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "App",
  components: {}
})
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
