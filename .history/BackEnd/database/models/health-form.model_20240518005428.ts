import mongoose, { Schema } from 'mongoose'

const SkincareFormSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    sex: { type: String },
    routine: { type: Number, default: 0 }, // Chu trình mong muốn
    // 0: Cơ bản, 1: Nâng cao
    age: { type: Number },
    weight: { type: Number }, // Cân nặng của người dùng
    skinCondition: [{ name: String }],
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
