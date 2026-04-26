import httpInstance from '@/utils/http'

//封装banner
export function getBannerAPI (params = {}) {
  // 默认为1 商品为2
  const { distributionSite = '1' } = params
  return httpInstance({
    url: '/home/banner',
    params: {
      distributionSite
    }
  })
}

//封装新鲜好物
export const findNewAPI = () => {
  return httpInstance({
    url:'/home/new'
  })
}

//封装热门推荐
export const getHotAPI = () => {
  return  httpInstance({
    url: '/home/hot'
  })
}

//封装商品列表
export const getGoodsAPI = () => {
  return httpInstance({
    url: '/home/goods'
  })
}