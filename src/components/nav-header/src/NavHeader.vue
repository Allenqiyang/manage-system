<template>
  <div class="nav-header">
    <el-icon @click="foldClick"><component :is="icon"/></el-icon>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const emit = defineEmits(["foldChange"])

const icon = ref("Fold")
const isFold = ref(false)
const foldClick = () => {
  if(icon.value === "Fold") {
    icon.value = "Expand"
  } else {
    icon.value = "Fold"
  }
  isFold.value = !isFold.value
  emit("foldChange", isFold.value)
}
</script>

<style scoped lang="less">
.nav-header {
  .el-icon {
    transform: scale(1.5);
  }
}
</style>