import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home')
  },
  {
    path: '/about-vue',
    name: 'About-Vue',
    component: () => import('../views/About')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router