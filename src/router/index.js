import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/layout/index.vue'
import Login from '@/views/login/index.vue'
import Home from '@/views/home/index.vue'
import Category from '@/views/category/index.vue'
import SubCategory from '@/views/subCategory/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        { path: '', component: Home },
        { path: 'category/:id', component: Category }
      ]
    },
    { path: '/login', component: Login },
    //二级分类路由
    { path: '/category/sub/:id', component: SubCategory }
  ],
  // 路由滚动行为定制-- 当切换页面时，使滚动条在最顶部
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
