// 将 components 中的组件 注册为全局组件
// 通过插件的方法 -- 使用固定方法 install(app)
import ImageView from '@/components/imageViews/ImageView.vue'
import Sku from '@/components/sku/index.vue'
export const componentsPlugin = {
  install(app) {
    // 需要全局注册的组件 - app.component("自定义组件名称",组件配置对象)
    app.component('XtxImageView', ImageView)
    app.component('XtxSku', Sku)
  }
}
