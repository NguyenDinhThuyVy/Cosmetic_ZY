import mongoose, { Schema } from 'mongoose'

const SkincareFormSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    skinType: { type: String },
    height: { type: Number }, // Chiều cao của người dùng
    age: { type: Number },
    weight: { type: Number }, // Cân nặng của người dùng
    current_health_conditions: [{ name: String }],
    dietary_restrictions: [{ name: String }], // Hạn chế dinh dưỡng của người dùng (mảng với nhiều hạn chế)
  },
  {
    timestamps: true, // Tự động thêm trường createdAt và updatedAt
  }
)

export const SkincareFormModel = mongoose.model(
  'skincare_forms',
  SkincareFormSchema
)
