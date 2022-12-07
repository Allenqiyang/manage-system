import { createApp } from "vue"

import App from "./App.vue"
import router from "./router"
import pinia from "./store"
import { setupStore } from "./store"

import "./assets/style/reset.less"

const app = createApp(App)
app.use(router)
app.use(pinia)
setupStore()
app.mount("#app")
