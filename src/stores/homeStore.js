import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getBannerAPI, findNewAPI } from '@/apis/home.js'

export const useHomeStore = defineStore('home', () => {
  // 封装轮播图数据
  const bannerList = ref([])
  const getBannerList = async () => {
    const res = await getBannerAPI()
    bannerList.value = res.result
    console.log(bannerList)
  }
  // 封装新鲜好物数据
  const newList = ref([])
  const getNewList = async () => {
    const res = await findNewAPI()
    newList.value = res.result
  }
  return {
    bannerList,
    getBannerList,
    newList,
    getNewList
  }
})
