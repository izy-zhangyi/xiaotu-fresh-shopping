import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/layout'
import Login from '@/views/login'
import Home from '@/views/home'
import Category from '@/views/category'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        { path: '', component: Home },
        { path: 'category', component: Category }
      ]
    },
    { path: '/login', component: Login }
  ]
})

export default router
