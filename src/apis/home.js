// 导入 自定义 http 请求模块
import https from '@/utils/http.js'

// 获取轮播图数据
export const getBannerAPI = (params = {}) => {
  // 默认为1 商品为2
  const { distributionSite = '1' } = params
  return https.get('home/banner', { params: { distributionSite } })
}

// 获取新鲜好物
export const findNewAPI = () => https.get('/home/new')

// 获取人气推荐
export const getHotAPI = () => https.get('/home/hot')

// 获取产品列表数据
export const getProductListAPI = () => https.get('/home/goods')
