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
    skinType: { type: String }, // Loại da
    skinCondition: [{ name: String }], // Tình trạng da
    desire: [{ name: String }], // Mong muốn cải thiện
  },
  {
    timestamps: true, // Tự động thêm trường createdAt và updatedAt
  }
)

export const SkincareFormModel = mongoose.model(
  'skincare_forms',
  SkincareFormSchema
)
