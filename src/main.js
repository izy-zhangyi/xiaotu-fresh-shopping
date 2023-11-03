import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// 引入初始化样式资源
import '@/styles/common.scss'
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
