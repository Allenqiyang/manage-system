import { defineStore } from "pinia"

import { IAccount } from "../service/login/types"
import { accountLoginRequest } from "../service/login"

const loginStore = defineStore('login', {
  state: () => {
    return {
      token: '',
      userInfo: {}
    }
  },
  actions: {
    async accountLogin(payload: IAccount) {
      const result = await accountLoginRequest(payload)
      console.log(result)
    }
  }
})

export default loginStore
