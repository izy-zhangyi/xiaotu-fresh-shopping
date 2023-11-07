import { ref } from 'vue'
import { defineStore } from 'pinia'

import { getDetailAPI, fetchHotGoodsAPI } from '@/apis/detail.js'

export const useDetailStore = defineStore(
  'detail',
  () => {
    // 封装 商品详情信息
    const goodsDetails = ref({})
    const getGoodsDetails = async (id) => {
      const res = await getDetailAPI(id)
      goodsDetails.value = res.result
    }

    // 封装热榜数据
    const hotList = ref([])
    const getHostList = async (id, type) => {
      const res = await fetchHotGoodsAPI(id, type)
      hotList.value = res.result
    }
    return {
      goodsDetails,
      getGoodsDetails,
      hotList,
      getHostList
    }
  },
  { persist: true }
)
