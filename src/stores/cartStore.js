import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
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

    // 删除购物车-删除全部数据
    const delCart = (skuId) => {
      // 思路：
      // 1. 找到要删除项的下标值 - splice
      // 2. 使用数组的过滤方法 - filter
      const idx = cartList.value.findIndex((item) => skuId === item.skuId)
      cartList.value.splice(idx, 1)
    }
    // 计算所有商品总数量
    const allCount = computed(() =>
      cartList.value.reduce((count, goods) => (count += goods.count), 0)
    )
    // 计算所有商品总价格
    const allPrice = computed(() =>
      cartList.value.reduce(
        (price, goods) => (price += goods.count * goods.price),
        0
      )
    )
    // 单选功能实现
    const singleCheck = (skuId, selectd) => {
      const item = cartList.value.find((item) => item.skuId === skuId)
      item.selectd = selectd
    }
    // 是否是全选计算属性
    const isAll = computed(() => cartList.value.every((item) => item.selectd))

    // 全选/全部选
    const allChange = (selectd) => {
      cartList.value.forEach((item) => (item.selectd = selectd))
    }

    // 计算选中的商品数量
    const selectedCount = computed(() =>
      cartList.value
        .filter((item) => item.selectd)
        .reduce((count, item) => (count += item.count), 0)
    )
    // 计算选中的商品价格
    const selectedPrice = computed(() =>
      cartList.value
        .filter((item) => item.selectd)
        .reduce((price, item) => (price += item.count * item.price), 0)
    )
    return {
      cartList,
      addCart,
      delCart,
      allCount,
      allPrice,
      singleCheck,
      allChange,
      isAll,
      selectedCount,
      selectedPrice
    }
  },
  { persist: true }
)
