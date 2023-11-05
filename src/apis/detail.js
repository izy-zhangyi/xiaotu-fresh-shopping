// 导入 自定义 http 请求模块
import https from '@/utils/http.js'

// 获取-商品详情
export const getDetailAPI = (id) => https.get('/goods', { params: { id } })

// 获取热榜数据
export const fetchHotGoodsAPI = (id, type, limit = 2) =>
  https.get('/goods/hot', { params: { id, type, limit } })
