interface User {
  email: string
  password: string
  name: string
  date_of_birth?: string
  address: string
  phone: string
  roles: string[]
  employeeCode?: string
  avatar?: string
  [key: string]: any
}
