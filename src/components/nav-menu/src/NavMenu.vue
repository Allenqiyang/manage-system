<template>
  <div class="nav-menu">
    <div class="head">
      <span class="title">⛄ Allen's System</span>
    </div>
    <el-menu
      default-active="2"
      @open="handleOpen"
      @close="handleClose"
    >
      <template v-for="item in userMenus" :id="item.id"></template>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import useLoginStore from '@/store/login'

const store = useLoginStore()
const userMenus = computed(() => store.userMenus)
const handleOpen = () => {console.log(1)}
const handleClose = () => {console.log(1)}
</script>

<style lang="less" scoped>
.nav-menu {
  height: 100%;
}

.head {
  display: flex;
  height: 28px;
  padding: 12px 10px 8px 10px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;

  .img {
    height: 100%;
    margin: 0 10px;
  }
  .title {
    font-size: 16px;
    font-weight: 700;
    color: white;
    white-space: nowrap;
  }
}

.el-menu {
  border-right: none;
  user-select: none;
}

.el-sub-menu {
  .el-menu-item {
    padding-left: 50px !important;
  }
}
</style>