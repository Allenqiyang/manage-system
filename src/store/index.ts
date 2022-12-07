import { createPinia } from "pinia"
import useLoginStore from "./login"

const pinia = createPinia()

export default pinia

export function setupStore() {
  const login = useLoginStore()
  login.loadLocalData()
}