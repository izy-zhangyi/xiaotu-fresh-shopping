// 导入 自定义 http 请求模块
import https from '@/utils/http.js'

// 获取分类数据
export const getTopCategoryAPI = (id) =>
  https.get('/category', { params: { id } })

// 获取二级分类数据
export const getCategoryFilterAPI = (id) =>
  https.get('/category/sub/filter', { params: { id } })

// 获取二级分类数据列表 /category/goods/temporary
// 注：当get请求时 需加上 params ,post请求时 可以直接省略，将封装的数据对象传递即可
export const getSubCategoryAPI = (data) =>
  https.post('/category/goods/temporary', data)
