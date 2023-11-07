import https from '@/utils/http.js'

// 生成订单结算页
export const getOrdersInfoAPI = () => https.get('/member/order/pre')

// 创建订单
export const createOrderAPI = (data) => https.post('/member/order', data)

// 获取-订单详情(以及支付结果)
export const getOrderDetailAPI = (id) => https.get(`/member/order/${id}`)
