// 导入 自定义 http 请求模块
import https from '@/utils/http.js'

// 获取分类数据
export const getTopCategoryAPI = (id) =>
  https.get('/category', { params: { id } })

// 获取二级分类数据
export const getCategoryFilterAPI = (id) =>
  https.get('/category/sub/filter', { params: { id } })
