<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useDetailStore } from '@/stores/datilStore.js'
const detailStore = useDetailStore()
const router = useRoute()
// 1代表24小时热销榜 2代表周热销榜 3代表总热销榜 可以使用type去适配title和数据列表
const props = defineProps({
  type: { type: Number, default: 1 }
})
detailStore.getHostList(router.params.id, props.type)

// 属性计算-title赋值
const TITLEMAP = {
  1: '24小时热榜',
  2: '周热榜'
  // 3: '月热榜',
  // 4: '年热榜'
}
const title = computed(() => TITLEMAP[props.type])
// 计算属性单一，不利于后期维护
// const title = computed(() => (pops.type === 1 ? '24小时热榜' : '周热榜'))
</script>

<template>
  <div class="goods-hot">
    <h3>{{ title }}</h3>
    <!-- 商品区块 -->
    <RouterLink
      :to="`/detail/${item.id}`"
      class="goods-item"
      v-for="item in detailStore.hotList"
      :key="item.id"
    >
      <img v-img-lazy="item.picture" alt="" />
      <p class="name ellipsis">{{ item.name }}</p>
      <p class="desc ellipsis">{{ item.desc }}</p>
      <p class="price">&yen;{{ item.price }}</p>
    </RouterLink>
  </div>
</template>

<style scoped lang="scss">
.goods-hot {
  h3 {
    height: 70px;
    background: $helpColor;
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }

  .goods-item {
    display: block;
    padding: 20px 30px;
    text-align: center;
    background: #fff;

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
}
</style>
