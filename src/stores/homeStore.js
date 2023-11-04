import { defineStore } from 'pinia'
import { ref } from 'vue'
import {
  getBannerAPI,
  findNewAPI,
  getHotAPI,
  getProductListAPI
} from '@/apis/home.js'

export const useHomeStore = defineStore('home', () => {
  // 封装轮播图数据
  const bannerList = ref([])
  const getBannerList = async () => {
    const res = await getBannerAPI()
    bannerList.value = res.result
  }
  // 封装新鲜好物数据
  const newList = ref([])
  const getNewList = async () => {
    const res = await findNewAPI()
    newList.value = res.result
  }
  // 封装人气推荐数据
  const hotList = ref([])
  const getHostList = async () => {
    const res = await getHotAPI()
    hotList.value = res.result
  }
  // 封装商品列表数据
  const productList = ref([])
  const getProductList = async () => {
    const res = await getProductListAPI()
    productList.value = res.result
  }
  return {
    bannerList,
    getBannerList,
    newList,
    getNewList,
    hotList,
    getHostList,
    productList,
    getProductList
  }
})
