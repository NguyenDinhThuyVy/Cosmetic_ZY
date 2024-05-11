import { AuthResponse } from 'src/types/auth.type'
import http from 'src/utils/http'

const authApi = {
  registerAccount(body: { email: string; password: string }) {
    return http.post<AuthResponse>('/register', body)
  },
  login(body: { email: string; password: string }) {
    return http.post<AuthResponse>('/login', body)
  },
  loginGoogle(body: { email: string; name: string }) {
    return http.post<AuthResponse>('/login/google', body)
  },
  logout() {
    return http.post('/logout')
  }
}
export default authApi
