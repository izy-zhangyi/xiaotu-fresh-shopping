import https from '@/utils/http.js'

// 生成订单结算页
export const getOrdersInfoAPI = () => https.get('/member/order/pre')

// 创建订单
export const createOrderAPI = (data) => https.post('/member/order', data)
