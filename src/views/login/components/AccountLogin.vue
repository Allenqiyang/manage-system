<template>
  <div class="account-login">
    <el-form 
      ref="ruleFormRef" 
      :model="account" 
      status-icon 
      :rules="rules" 
      label-width="60px" 
    >
      <el-form-item label="账户" prop="username">
        <el-input v-model="account.username" type="text" size="large"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" type="password" autocomplete="off"  size="large"/>
      </el-form-item>
      <!-- <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">Submit</el-button>
        <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
      </el-form-item> -->
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'

import { rules } from '../config/login-rules'

const ruleFormRef = ref<FormInstance>()

const account = reactive({
  username: '',
  password: ''
})

// const submitForm = (formEl: FormInstance | undefined) => {
//   if (!formEl) return
//   formEl.validate((valid) => {
//     if (valid) {
//       console.log('submit!')
//     } else {
//       console.log('error submit!')
//       return false
//     }
//   })
// }

// const resetForm = (formEl: FormInstance | undefined) => {
//   if (!formEl) return
//   formEl.resetFields()
// }
</script>

<style lang="less" scoped>
.account-login {
  .el-form-item {
    align-items: center;
  }
}
</style>