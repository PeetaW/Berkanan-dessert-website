// router.js
import { createRouter, createWebHistory } from 'vue-router'
import PeterDesign from '../views/PeterDesing.vue'

const routes = [
  {
    path: '/',
    name: 'peterdesign',
    component: PeterDesign
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
