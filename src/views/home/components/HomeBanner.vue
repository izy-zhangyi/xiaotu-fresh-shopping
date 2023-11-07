<script setup>
import { useHomeStore } from '@/stores/homeStore.js'
import router from '@/router'
const homeStore = useHomeStore()
const onImage = (val) => {
  router.push(val)
}
</script>
<template>
  <div class="home-banner">
    <el-carousel :interval="4000" type="card" height="500px">
      <el-carousel-item v-for="item in homeStore.bannerList" :key="item.id">
        <img
          :src="item.imgUrl"
          alt=""
          srcset=""
          @click="onImage(item.hrefUrl)"
        />
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
