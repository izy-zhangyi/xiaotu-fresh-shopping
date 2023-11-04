// 导入 自定义 http 请求模块
import https from '@/utils/http.js'

// 获取轮播图数据
export const getBannerAPI = () => https.get('home/banner')

// 获取新鲜好物
export const findNewAPI = () => https.get('/home/new')
