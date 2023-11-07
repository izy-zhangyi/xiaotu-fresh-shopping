import https from '@/utils/http.js'

// 登录
export const loginAPI = (data) => https.post('/login', data)

// 封装猜你喜欢接口
export const getLikeListAPI = ({ limit = 4 }) =>
  https.get('/goods/relevant', limit)
