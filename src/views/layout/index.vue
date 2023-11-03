<script setup>
import LayoutFooter from '@/views/layout/components/LayoutFooter.vue'
import LayoutHeader from '@/views/layout/components/LayoutHeader.vue'
import LayoutNav from '@/views/layout/components/LayoutNav.vue'
</script>
<template>
  <div>
    <LayoutNav />
    <LayoutHeader />
    <!-- 二级路由出口 -->
    <RouterView />
    <LayoutFooter />
  </div>
</template>
