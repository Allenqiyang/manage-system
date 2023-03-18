<template>
  <div class="nav-menu">
    <div class="head">
      <span class="title">⛄ Allen's System</span>
    </div>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      text-color="#fff"
      default-active="2"
    >
      <template v-for="item in userMenus" :key="item.id">
        <template v-if="item.type === 1">
          <el-sub-menu :index="String(item.id)">
            <template #title>
              <el-icon><component :is="icons[String(item.icon)]" /></el-icon>
              {{ item.name }}
            </template>
            <el-menu-item v-for="subitem in item.children" :key="subitem.id" :index="`${subitem.id}`">
              <span>{{ subitem.name }}</span>
            </el-menu-item>
          </el-sub-menu>
        </template>
        <template v-else>
          <el-menu-item>
            <el-icon v-if="item.icon"><component :is="item.icon" /></el-icon>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import useLoginStore from '@/store/login'

const store = useLoginStore()
const userMenus = computed(() => store.userMenus)
userMenus.value.forEach(item => console.log(item))
const icons: any = {
  "el-icon-monitor": "Monitor",
  "el-icon-setting": "Setting",
  "el-icon-goods": "Goods",
  "el-icon-chat-line-round": "ChatLineRound"
}

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
    // color: white;
    white-space: nowrap;
  }
}

:deep(.el-menu-item.is-active) {
  background-color: rgb(67, 74, 80);
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