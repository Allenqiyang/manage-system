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
        <el-input 
          v-model="account.password" 
          type="password" 
          autocomplete="off" 
          size="large" 
          show-password
        />
      </el-form-item>
    </el-form>
    <div class="control">
      <el-checkbox v-model="isRemember">记住密码</el-checkbox>
      <el-link type="primary" :underline="false">忘记密码</el-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'

import { accountRules } from '../config/login-rules'

const formRef = ref<FormInstance>()

const isRemember = ref(false)

const account = reactive({
  username: '',
  password: ''
})

const accountLogin = () => {
  formRef.value?.validate((valid) => {
    if(valid) {
      console.log("account login")
    }
  })
}

defineExpose({
  accountLogin
})
</script>

<style lang="less" scoped>
.account-login {
  .el-form-item {
    align-items: center;
  }

  .control {
    width: 300px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    position: relative;
    top: -5px;
  }
}
</style>