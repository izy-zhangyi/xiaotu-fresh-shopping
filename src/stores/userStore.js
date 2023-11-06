import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginAPI } from '@/apis/user'

export const useUserStore = defineStore(
  'user',
  () => {
    // 封装 登录用户信息 ，token
    const userInfo = ref({})
    const getUserInfo = async (val) => {
      const res = await loginAPI(val)
      userInfo.value = res.result
    }

    // 退出登录 -- 清除用户信息
    const clearUserInfo = () => {
      userInfo.value = {}
    }
    return {
      userInfo,
      getUserInfo,
      clearUserInfo
    }
  },
  { persist: true }
)
