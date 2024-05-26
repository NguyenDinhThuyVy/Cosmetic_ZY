import { Document, Types } from 'mongoose'

// Define the TypeScript interface for the Skincare Form
export interface SkincareForm {
  user: Types.ObjectId // Reference to the user
  sex?: string
  desired_routine?: string // Desired routine
  skin_type?: string // Skin type
  skin_condition?: string // Skin condition
  desired_improv?: string // Desired improvement
  aiRecommendation?: string[] // AI recommendations
  additionalData?: string
  createdAt?: Date
  updatedAt?: Date
}
