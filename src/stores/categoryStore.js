import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryListAPI } from '@/apis/layout.js'
export const useCategoryStore = defineStore('category', () => {
  // 导航列表的数据管理
  // state 导航列表数据
  const categoryList = ref([])
  const getCategoryList = async () => {
    const res = await getCategoryListAPI()
    categoryList.value = res.result
  }

  return {
    categoryList,
    getCategoryList
  }
})
