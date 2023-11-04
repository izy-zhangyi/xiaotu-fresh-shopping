import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryListAPI } from '@/apis/layout.js'
import { getTopCategoryAPI } from '@/apis/category.js'
import { useRoute } from 'vue-router'
export const useCategoryStore = defineStore('category', () => {
  // 导航列表的数据管理
  // state 导航列表数据
  const router = useRoute()

  const categoryList = ref([])
  const getCategoryList = async () => {
    const res = await getCategoryListAPI()
    categoryList.value = res.result
  }

  // 封装一级分类数据
  const topCateGoryList = ref({})
  // 默认首次 为默认id，在路由切换时，id会替换成最新的id
  const getTopCateGoryList = async (id = router.params.id) => {
    const res = await getTopCategoryAPI(id)
    topCateGoryList.value = res.result
  }

  return {
    categoryList,
    getCategoryList,
    topCateGoryList,
    getTopCateGoryList
  }
})
