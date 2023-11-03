// 引入 http 模块
import https from '@/utils/http.js'

// 获取分类数据
export const getCategoryListAPI = () => https.get('/home/category/head')
