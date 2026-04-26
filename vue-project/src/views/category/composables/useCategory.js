import { getTopCategoryAPI } from '@/apis/category'
import { ref, onMounted } from 'vue'
//在组件内获得路由参数
import { useRoute } from 'vue-router'
import { onBeforeRouteUpdate } from 'vue-router'

export function useCategory() {
    const categoryData = ref([])
    const route = useRoute()
    const getCategory = async (id = route.params.id) => {
        //组件内的路由参数id传入接口
        const res = await getTopCategoryAPI(id)
        categoryData.value = res.data.result
    }

    onMounted(() => {
        getCategory()
    })

    onBeforeRouteUpdate((to) => {
        getCategory(to.params.id)
    })

    return {
        categoryData
    }
}