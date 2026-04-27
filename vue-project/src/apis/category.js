import request from '@/utils/http'

export const getTopCategoryAPI = (id) => {
  return request({
    url:'/category',
    params:{
      id
    }
  })
}

//获得二级分类
export const getCategoryFilterAPI = (id) => {
  return request({
    url:'/category/sub/filter',
    params:{
      id
    }
  })
}

//获取导航分类
export const getSubCategoryAPI = (data) => {
  return request({
    url:'/category/goods/temporary',
    method:'POST',
    data
  })
}
