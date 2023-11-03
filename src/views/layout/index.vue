<script setup>
import LayoutNav from '@/views/layout/components/LayoutNav.vue'
import LayoutHeader from '@/views/layout/components/LayoutHeader.vue'
import LayoutFooter from '@/views/layout/components/LayoutFooter.vue'
import LayoutFixed from '@/views/layout/components/LayoutFixed.vue'
import { useCategoryStore } from '@/stores/categoryStore.js'
import { onMounted } from 'vue'
const categoryStore = useCategoryStore()
// 触发获取导航列表的action
onMounted(() => {
  categoryStore.getCategoryList()
})
</script>

<template>
  <LayoutNav />
  <LayoutHeader />
  <LayoutFixed />
  <RouterView />
  <LayoutFooter />
</template>
