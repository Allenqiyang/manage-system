<template>
  <div class="phone-login">
    <el-form 
      ref="ruleFormRef" 
      :model="account" 
      status-icon 
      :rules="phoneRules" 
      label-width="65px" 
    >
      <el-form-item label="手机号" prop="phoneNum">
        <el-input v-model="account.phoneNum" size="large"/>
      </el-form-item>
      <el-form-item label="验证码" prop="verifyCode" class="get-code">
        <el-input v-model="account.verifyCode" autocomplete="off" size="large"/>
        <el-button type="primary">获取验证码</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

import { phoneRules } from '../config/login-rules'

const account = reactive({
  phoneNum: '',
  verifyCode: ''
})
</script>

<style lang="less" scoped>
.phone-login {
  .el-form-item {
    align-items: center;
  }

  .get-code {
    display: flex;
    flex-wrap: nowrap;

    .el-button {
      margin-left: 10px;
      height: 38px;
    }

    :deep(.el-form-item__content) {
      flex-wrap: nowrap;
    }
  }
}
</style>