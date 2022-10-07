import { createApp } from "vue"
import "element-plus/theme-chalk/base.css"

import App from "./App.vue"

import router from "./router"
import myRequest from "./service"
import store from "./store"

const app = createApp(App)
app.use(router)
app.use(store)
app.mount("#app")

myRequest.request({
  url: "/home/multidata",
  method: "GET"
})
