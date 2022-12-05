import myRequest from "../index"
import { IAccount, IDataType, ILoginResult } from "./types"

export function accountLoginRequest(account: IAccount) {
  return myRequest.post<IDataType<ILoginResult>>({
    url: '/login',
    data: account
  })
}