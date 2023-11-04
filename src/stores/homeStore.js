import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getBannerAPI } from '@/apis/home.js'

export const useHomeStore = defineStore('home', () => {
  const bannerList = ref([])
  const getBannerList = async () => {
    const res = await getBannerAPI()
    bannerList.value = res.result
    console.log(bannerList)
  }
  return {
    bannerList,
    getBannerList
  }
})
