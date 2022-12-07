<template>
  <div class="panel">
    <p class="title">后台管理系统</p>
    <div class="input-area">
      <el-form 
        ref="formRef" 
        :model="account" 
        status-icon 
        :rules="accountRules" 
        label-width="60px" 
      >
        <el-form-item label="账户" prop="name">
          <el-input v-model="account.name" type="text" size="large"/>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="account.password" type="password" autocomplete="off" size="large"/>
        </el-form-item>
      </el-form>
      <div class="control">
        <el-checkbox v-model="isRemember">记住密码</el-checkbox>
        <el-link type="primary" :underline="false">忘记密码</el-link>
      </div>
      <el-button size="large" type="primary" @click="confirmLogin">Submit</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { FormInstance } from 'element-plus'

import localCache from '@/utils/cache'
import { accountRules } from '../config/login-rules'
import useLoginStore from '@/store/login'

const formRef = ref<FormInstance>()

const isRemember = ref(false)

const account = reactive({
  name: localCache.getCache('name') || '',
  password: localCache.getCache('password') || ''
})

const login = useLoginStore()
const confirmLogin = () => {
  formRef.value?.validate((valid) => {
    if(valid) {
      if(isRemember.value) {
        localCache.setCache('name', account.name)
        localCache.setCache('password', account.password)
      } else {
        localCache.deleteCache('name')
        localCache.deleteCache('password')
      }

      login.accountLogin(account)
    }
  })
}

</script>

<style lang="less" scoped>
.panel {
  width: 370px;
  height: 290px;
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
    margin: 8px auto 0;
    position: relative;
    left: 2px;
    display: block;
  }
}
</style>