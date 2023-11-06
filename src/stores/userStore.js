import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginAPI } from '@/apis/user'
import { useCartStore } from '@/stores/cartStore.js'

export const useUserStore = defineStore(
  'user',
  () => {
    const cartStore = useCartStore()
    // 封装 登录用户信息 ，token
    const userInfo = ref({})
    const getUserInfo = async (val) => {
      const res = await loginAPI(val)
      userInfo.value = res.result
    }

    // 退出登录 -- 清除用户信息,购物车列表
    const clearUserInfo = () => {
      userInfo.value = {}
      cartStore.clearCartList()
    }
    return {
      userInfo,
      getUserInfo,
      clearUserInfo
    }
  },
  { persist: true }
)
