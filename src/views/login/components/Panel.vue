<template>
  <div class="panel">
    <p class="title">后台管理系统</p>
    <el-tabs class="input-area" stretch>
      <el-tab-pane label="Route">
        <AccountLogin/>
      </el-tab-pane>
      <el-tab-pane label="Config">
        <PhoneLogin/>
      </el-tab-pane>
    </el-tabs>
    <div class="control">
      <el-checkbox v-model="isRemember">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import AccountLogin from './AccountLogin.vue'
import PhoneLogin from './PhoneLogin.vue'

const isRemember = ref(false)
</script>

<style lang="less" scoped>
.panel {
  width: 350px;
  height: 300px;
  background-color: aliceblue;
  border-radius: 10px;
  position: relative;
  top: -20px;

  .title {
    font-size: 22px;
    font-weight: bold;
    color: #303133;
    text-align: center;
  }

  .input-area {
    width: 320px;
    margin: 0 auto;
  }

  .control {
    width: 300px;
    margin: 5px auto 0;
    display: flex;
    justify-content: space-between;
  }
}
</style>