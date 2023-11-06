import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'
// 引入初始化样式资源
import '@/styles/common.scss'
// 引入懒加载指令插件并且注册
import { lazyPlugin } from '@/directives'

// 引入全局注册插件
import { componentsPlugin } from '@/components/index.js'
const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(lazyPlugin)
app.use(pinia)
app.use(router)
app.use(componentsPlugin)

app.mount('#app')
