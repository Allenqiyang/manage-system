<template>
  <div class="panel">
    <p class="title">后台管理系统</p>
    <div class="input-area">
      <el-tabs stretch>
        <el-tab-pane>
          <template #label>
            <span><el-icon><User /></el-icon> 账号登陆</span>
          </template>
          <AccountLogin ref="accountRef"/>
        </el-tab-pane>
        <el-tab-pane>
          <template #label>
            <span><el-icon><Iphone /></el-icon> 手机登录</span>
          </template>
          <PhoneLogin />
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="control">
      <el-checkbox v-model="isRemember">记住密码</el-checkbox>
      <el-link type="primary" :underline="false">忘记密码</el-link>
    </div>
    <el-button size="large" type="primary" @click="confirmLogin">Submit</el-button>
  </div>
</template>

<script lang="ts" setup>
import AccountLogin from './AccountLogin.vue'
import PhoneLogin from './PhoneLogin.vue'

import { ref } from 'vue'

const isRemember = ref(false)
const accountRef = ref<InstanceType<typeof AccountLogin>>()

const confirmLogin = () => {
  accountRef.value?.accountLogin()
}

</script>

<style lang="less" scoped>
.panel {
  width: 370px;
  height: 340px;
  box-shadow: 0 0 25px #cac6c6;
  background-color: rgb(252, 252, 252);
  border-radius: 10px;
  position: relative;
  top: -20px;

  .el-form-item {
    align-items: center;
  }

  .title {
    font-size: 22px;
    font-weight: bold;
    color: #303133;
    text-align: center;
  }

  .el-icon {
    position: relative;
    top: 2px;
  }

  :deep(.el-tabs__item) {
    padding: 0;
  }

  .input-area {
    width: 300px;
    margin: 0 auto;
  }

  .control {
    width: 300px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    position: relative;
    top: -5px;
  }

  .el-button {
    width: 305px;
    margin: 0 auto;
    position: relative;
    left: 2px;
    display: block;
  }
}
</style>