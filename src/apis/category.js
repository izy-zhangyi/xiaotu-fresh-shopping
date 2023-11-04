// 导入 自定义 http 请求模块
import https from '@/utils/http.js'

// 获取分类数据
export const getTopCategoryAPI = (id) =>
  https.get('/category', { params: { id } })
