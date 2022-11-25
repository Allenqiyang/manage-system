<template>
  <div class="account-login">
    <el-form 
      ref="formRef" 
      :model="account" 
      status-icon 
      :rules="accountRules" 
      label-width="60px" 
    >
      <el-form-item label="账户" prop="username">
        <el-input v-model="account.username" type="text" size="large"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" type="password" autocomplete="off" size="large"/>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'

import { accountRules } from '../config/login-rules'

const formRef = ref<FormInstance>()

const account = reactive({
  username: '',
  password: ''
})

const accountLogin = () => {
  console.log('login')
}
</script>

<style lang="less" scoped>
.account-login {
  .el-form-item {
    align-items: center;
  }
}
</style>