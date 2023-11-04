<script setup>
import { useHomeStore } from '@/stores/homeStore.js'
const homeStore = useHomeStore()
</script>
<template>
  <div class="home-banner">
    <el-carousel :interval="4000" type="card" height="500px">
      <el-carousel-item v-for="item in homeStore.bannerList" :key="item.id">
        <img :src="item.imgUrl" alt="" srcset="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped>
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;
}
img {
  width: 100%;
  height: 500px;
}
</style>
