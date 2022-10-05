import { createRouter, createWebHistory } from "vue-router"
import { RouteRecordRaw } from "vue-router"

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

export default router
