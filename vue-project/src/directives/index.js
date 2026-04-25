//定义懒加载插件
import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin = {
    install(app) {
        //定义全局指令
        app.directive('img-lazy', {
            mounted(el, binding) {
                //el:指令绑定的元素
                //binding:指令的绑定信息
                //el.src = binding.value
                console.log(el, binding.value)
                const { stop } = useIntersectionObserver(
                    el,
                    ([{ isIntersecting }]) => {
                        console.log(isIntersecting)
                        if (isIntersecting) {
                            el.src = binding.value
                            stop()
                        }
                    }
                )
            }
        })
    }
}