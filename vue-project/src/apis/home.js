import httpInstance from '@/utils/http'

//封装banner
export function getBannerAPI(){
    return httpInstance({
        url:'/home/banner'
    })
}

//封装新鲜好物
export const findNewAPI = () => {
  return httpInstance({
    url:'/home/new'
  })
}