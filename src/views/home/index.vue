<script setup>
import HomeCategory from '@/views/home/components/HomeCategory.vue'
import HomeBanner from '@/views/home/components/HomeBanner.vue'
import HomeNew from '@/views/home/components/HomeNew.vue'
import HomeHot from '@/views/home/components/HomeHot.vue'
import { useHomeStore } from '@/stores/homeStore.js'
import { onMounted } from 'vue'
const homeStore = useHomeStore()
onMounted(() => {
  homeStore.getBannerList(), homeStore.getNewList(), homeStore.getHostList()
})
</script>
<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
</template>
