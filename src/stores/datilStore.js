import { ref } from 'vue'
import { defineStore } from 'pinia'

import { getDetailAPI } from '@/apis/detail.js'

export const useDetailStore = defineStore('detail', () => {
  // 封装 商品详情信息
  const goodsDetails = ref({})
  const getGoodsDetails = async (id) => {
    const res = await getDetailAPI(id)
    goodsDetails.value = res.result
  }

  return {
    goodsDetails,
    getGoodsDetails
  }
})
