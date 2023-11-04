<script setup>
defineProps({
  item: {
    default: () => {},
    type: Object
  }
})
</script>
<template>
  <RouterLink to="/" class="goods-item">
    <img v-img-lazy="item.picture" alt="" />
    <p class="name ellipsis">{{ item.name }}</p>
    <p class="desc ellipsis">{{ item.desc }}</p>
    <p class="price">&yen;{{ item.price }}</p>
  </RouterLink>
</template>
<style lang="scss" scoped>
.goods-item {
  display: block;
  width: 220px;
  padding: 20px 30px;
  text-align: center;
  transition: all 0.5s;

  &:hover {
    transform: translate3d(0, -3px, 0);
    box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
  }

  img {
    width: 160px;
    height: 160px;
  }

  p {
    padding-top: 10px;
  }

  .name {
    font-size: 16px;
  }

  .desc {
    color: #999;
    height: 29px;
  }

  .price {
    color: $priceColor;
    font-size: 20px;
  }
}
</style>
