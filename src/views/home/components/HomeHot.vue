<script setup>
import HomePanel from '@/views/home/components/HomePanel.vue'
import { useHomeStore } from '@/stores/homeStore.js'
const homeStore = useHomeStore()
</script>

<template>
  <HomePanel title="人气推荐" subTitle="人气爆款 不容错过">
    <ul class="goods-list">
      <li v-for="item in homeStore.hotList" :key="item.id">
        <RouterLink to="/">
          <img v-img-lazy="item.picture" alt="" srcset="" />
          <p class="title">{{ item.title }}</p>
          <p class="alt">{{ item.alt }}</p>
        </RouterLink>
      </li>
    </ul>
  </HomePanel>
</template>

<style scoped lang="scss">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;

  li {
    width: 306px;
    height: 406px;

    background: #f0f9f4;
    transition: all 0.5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .price {
      color: $priceColor;
    }
  }
}
</style>
