interface HealthForm {
  user: string
  sex?: string
  height?: number
  age?: number
  weight?: number
  current_health_conditions?: { name: string }[]
  dietary_restrictions?: { name: string }[]
}
