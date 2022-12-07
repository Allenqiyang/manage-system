import { defineStore } from "pinia"
import router from "../router"

import { IAccount } from "../service/login/types"
import localCache from "../utils/cache"
import { accountLogin, getUserInfo, getUserMenu } from "../service/login"

const useLoginStore = defineStore('login', {
  state: () => {
    return {
      token: '',
      userInfo: {},
      userMenus: [] as any[]
    }
  },
  actions: {
    async accountLogin(payload: IAccount) {
      const loginResult = await accountLogin(payload)
      const {id, token} = loginResult.data
      this.token = token
      localCache.setCache('token', token)

      const userInfoResult = await getUserInfo(id)
      this.userInfo = userInfoResult.data
      localCache.setCache('userInfo', userInfoResult.data)

      const userMenuResult = await getUserMenu(id)
      this.userMenus = userMenuResult.data
      localCache.setCache('userMenu', userMenuResult.data)

      router.push('/main')
    },
    loadLocalData() {
      const token = localCache.getCache('token')
      if(token) {
        this.token = token
      }
      const userInfo = localCache.getCache('userInfo')
      if(userInfo) {
        this.userInfo = userInfo
      }
      const userMenus = localCache.getCache('userMenu')
      if(userMenus) {
        this.userMenus = userMenus
      }
    }
  }
})

export default useLoginStore
