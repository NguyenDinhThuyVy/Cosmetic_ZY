interface SkincareForm {
  user: string
  sex?: string
  skinType?: number
  routine?: number
  skinCondition?: { name: string }[]
  desire?: { name: string }[]
}
