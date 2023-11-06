import https from '@/utils/http.js'

// 加入购物车
export const insertCartAPI = (data) => https.post('/member/cart', data)

// 获取最新的购物车列表数据
export const findNewCartListAPI = () => https.get('/member/cart')

// 删除购物车
export const delCartAPI = (ids) =>
  https.delete('/member/cart', { data: { ids } })

// 合并购物车数据
export const mergeCartAPI = (data) => https.post('/member/cart/merge', data)
