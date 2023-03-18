<template>
  <div class="main">
    <el-container class="main-container">
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <NavMenu :collapse="isCollapse"/>
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">
          <NavHeader @foldChange="handleFoleChange"/>
        </el-header>
        <el-main class="page-content">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"

import NavMenu from "@/components/nav-menu"
import NavHeader from "@/components/nav-header"

const isCollapse = ref(false)
const handleFoleChange = (isFold: boolean) => {
  isCollapse.value = isFold
}
</script>

<style scoped lang="less">
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.el-container {
  height: 100%;
}

.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  text-align: left;
  background-color: #545c64;
  transition: width .3s ease-in-out;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

.el-main {
  color: #333;
  text-align: center;
  background-color: #f0f2f5;
}

.el-header {
  height: 48px !important;
}

.el-header, .el-footer {
  display: flex;
  color: #333;
  text-align: center;
  align-items: center;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
