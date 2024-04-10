import { User } from './user.type'
import { SuccessResponse } from './utils.type'

export type AuthResponse = RespSuccessResponse<{
  access_token: string
  expires: string
  user: User
}>
