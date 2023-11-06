import https from '@/utils/http.js'

// 登录
export const loginAPI = (data) => https.post('/login', data)
