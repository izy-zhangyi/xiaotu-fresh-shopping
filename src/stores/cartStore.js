import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useUserStore } from '@/stores/userStore.js'
import { insertCartAPI, findNewCartListAPI, delCartAPI } from '@/apis/cart.js'
export const useCartStore = defineStore(
  'cart',
  () => {
    const userStore = useUserStore()
    // 计算是否是登录状态
    const isLogin = computed(() => userStore.userInfo.token)
    // 封装购物车数据
    const cartList = ref([])
    //获取最新的购物车列表
    const newCartList = async () => {
      const res = await findNewCartListAPI()
      cartList.value = res.result
    }
    const addCart = async (goods) => {
      const { skuId, count } = goods
      if (isLogin.value) {
        // 登录之后的加入购车逻辑
        await insertCartAPI({ skuId, count })
        newCartList()
      } else {
        //添加购物车操作
        //已添加过-count+1
        //没有添加过-直接push
        //思路：通过匹配传递过来的商品对象中的skuId能不能在cartList中找到，找到了就是添加过
        const item = cartList.value.find((item) => item.skuId === goods.skuId)
        console.log(item)
        if (item) {
          // 已经存在相同商品数据，count +1
          item.count = goods.count
        } else {
          // 当前商品在购物车不存在，直接添加
          cartList.value.push(goods)
        }
      }
    }
    // 退出登录 清空购物车列表
    const clearCartList = () => (cartList.value = [])

    // 删除购物车-删除全部数据
    const delCart = async (skuId) => {
      if (isLogin.value) {
        await delCartAPI([skuId])
        newCartList()
      } else {
        // 思路：
        // 1. 找到要删除项的下标值 - splice
        // 2. 使用数组的过滤方法 - filter
        const idx = cartList.value.findIndex((item) => skuId === item.skuId)
        cartList.value.splice(idx, 1)
      }
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
    const singleCheck = (skuId, selected) => {
      const item = cartList.value.find((item) => item.skuId === skuId)
      item.selected = selected
    }
    // 是否是全选计算属性
    const isAll = computed(() => cartList.value.every((item) => item.selected))

    // 全选/全部选
    const allChange = (selected) => {
      cartList.value.forEach((item) => (item.selected = selected))
    }

    // 计算选中的商品数量
    const selectedCount = computed(() =>
      cartList.value
        .filter((item) => item.selected)
        .reduce((count, item) => (count += item.count), 0)
    )
    // 计算选中的商品价格
    const selectedPrice = computed(() =>
      cartList.value
        .filter((item) => item.selected)
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
      selectedPrice,
      newCartList,
      clearCartList
    }
  },
  { persist: true }
)
