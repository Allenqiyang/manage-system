import { createRouter, createWebHistory } from "vue-router"
import { RouteRecordRaw } from "vue-router"

import localCache from "../utils/cache"

const routes: RouteRecordRaw[] = [
  {
    path: "/login",
    component: () => import("@/views/login/index.vue")
  },
  {
    path: "/main",
    component: () => import("@/views/main/index.vue")
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

router.beforeEach((to) => {
  if(to.path !== '/login') {
    const token = localCache.getCache('token')
    if(!token) {
      return '/login'
    }
  }
})

export default router
