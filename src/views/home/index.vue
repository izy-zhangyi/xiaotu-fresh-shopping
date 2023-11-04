<script setup>
import HomeCategory from '@/views/home/components/HomeCategory.vue'
import HomeBanner from '@/views/home/components/HomeBanner.vue'
import { useHomeStore } from '@/stores/homeStore.js'
import { onMounted } from 'vue'
const homeStore = useHomeStore()
onMounted(() => {
  homeStore.getBannerList()
})
</script>
<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
</template>
