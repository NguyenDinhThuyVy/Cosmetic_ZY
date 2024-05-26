import { Purchase } from 'src/types/purchase.type'
import { User } from 'src/types/user.type'
import { SuccessResponse } from 'src/types/utils.type'
import http from 'src/utils/http'

interface BodyUpdateProfile extends Omit<User, '_id' | 'roles' | 'createdAt' | 'updatedAt' | 'email'> {
  password?: string
  newPassword?: string
}
interface BodyForgetPassword
  extends Omit<User, '_id' | 'roles' | 'createdAt' | 'updatedAt' | 'name' | 'date_of_birth' | 'address' | 'phone'> {
  password?: string
  newPassword?: string
}
const userApi = {
  getProfile() {
    return http.get<SuccessResponse<User>>('me')
  },
  updateProfile(body: BodyUpdateProfile) {
    return http.put<SuccessResponse<User>>('user', body)
  },
  uploadAvatar(body: FormData) {
    return http.post<SuccessResponse<string>>('user/upload-avatar', body, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  forgetPassword(body: BodyForgetPassword) {
    return http.post<SuccessResponse<User>>('/forgotten', body)
  },
  getHealthFormDetail(id: string) {
    return http.get<SuccessResponse<SkincareForm>>(`health/${id}`)
  }
}

export default userApi
