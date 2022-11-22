import { createApp } from "vue"

import App from "./App.vue"

import router from "./router"
import myRequest from "./service"
import store from "./store"

const app = createApp(App)
app.use(router)
app.use(store)
app.mount("#app")

interface DataType {
  data: any
  returnCode: string
  success: boolean
}

myRequest.request<DataType>({
  url: "/home/multidata",
  method: "GET"
}).then(res => {
  console.log(res.data)
  console.log(res.returnCode)
  console.log(res.success)
})
