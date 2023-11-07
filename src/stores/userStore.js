import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginAPI, getLikeListAPI } from '@/apis/user'
import { useCartStore } from '@/stores/cartStore.js'
import { mergeCartAPI } from '@/apis/cart.js'

export const useUserStore = defineStore(
  'user',
  () => {
    const cartStore = useCartStore()
    // 封装 登录用户信息 ，token
    const userInfo = ref({})
    const getUserInfo = async (val) => {
      const res = await loginAPI(val)
      userInfo.value = res.result
      // 合并购物车的操作
      await mergeCartAPI(
        cartStore.cartList.map((item) => {
          return {
            skuId: item.skuId,
            selectd: item.selectd,
            count: item.count
          }
        })
      )
      cartStore.newCartList()
    }

    // 退出登录 -- 清除用户信息,购物车列表
    const clearUserInfo = () => {
      userInfo.value = {}
      cartStore.clearCartList()
    }

    // 封装你猜你喜欢数据
    const likeList = ref([])
    const getLikeList = async (limit) => {
      const res = await getLikeListAPI(limit)
      likeList.value = res.result
    }
    return {
      userInfo,
      getUserInfo,
      clearUserInfo,
      likeList,
      getLikeList
    }
  },
  { persist: true }
)
