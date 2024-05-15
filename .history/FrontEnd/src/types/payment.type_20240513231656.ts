export interface Payment {
  street: string
  totalMoney: number
  city: string
  name: string
  phone: string
  paymentMethod: number
  purchases: any[] // Change this type as needed
  order: any[] // Change this type as needed
}
