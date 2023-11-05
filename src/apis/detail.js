// 导入 自定义 http 请求模块
import https from '@/utils/http.js'

// 获取-商品详情
export const getDetailAPI = (id) => https.get('/goods', { params: { id } })
