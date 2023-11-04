<script setup>
import HomePannel from '@/views/home/components/HomePannel.vue'
import { useHomeStore } from '@/stores/homeStore.js'
const homeStore = useHomeStore()
</script>

<template>
  <HomePannel title="人气推荐" subTitle="人气爆款 不容错过">
    <template #main>
      <ul class="goods-list">
        <li v-for="item in homeStore.hotList" :key="item.id">
          <RouterLink to="/">
            <img :src="item.picture" alt="" srcset="" />
            <p class="title">{{ item.title }}</p>
            <p class="alt">{{ item.alt }}</p>
          </RouterLink>
        </li>
      </ul>
    </template>
  </HomePannel>
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
