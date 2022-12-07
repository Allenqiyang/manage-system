import myRequest from "../index"
import { IAccount, IDataType, ILoginResult } from "./types"

export function accountLogin(account: IAccount) {
  return myRequest.post<IDataType<ILoginResult>>({
    url: '/login',
    data: account
  })
}

export function getUserInfo(id: number) {
  return myRequest.get<IDataType>({
    url: '/users/' + id,
    showLoading: false
  })
}

export function getUserMenu(id: number) {
  return myRequest.get<IDataType>({
    url: '/role/' + id + '/menu',
    showLoading: false
  })
}