import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useCartStore = defineStore(
  'cart',
  () => {
    // 封装购物车数据
    const cartList = ref([])
    const addCart = (goods) => {
      //添加购物车操作
      //已添加过-count+1
      //没有添加过-直接push
      //思路：通过匹配传递过来的商品对象中的skuId能不能在cartList中找到，找到了就是添加过
      const item = cartList.value.find((item) => item.skuId === goods.skuId)
      console.log(item)
      if (item) {
        // 已经存在相同商品数据，count +1
        item.count += goods.count
      } else {
        // 当前商品在购物车不存在，直接添加
        cartList.value.push(goods)
      }
    }
    return {
      cartList,
      addCart
    }
  },
  { persist: true }
)
