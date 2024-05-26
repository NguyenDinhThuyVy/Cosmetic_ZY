import mongoose, { Schema } from 'mongoose'

const SkincareFormSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    sex: { type: String },
    desired_routine: { type: String, default: 0 }, // Chu trình mong muốn

    // 0: Cơ bản, 1: Nâng cao
    skin_type: { type: String }, // Loại da
    skin_condition: [{ type: String }], // Tình trạng da
    desire: [{ type: String }], // Mong muốn cải thiện
  },
  {
    timestamps: true, // Tự động thêm trường createdAt và updatedAt
  }
)

export const SkincareFormModel = mongoose.model(
  'skincare_forms',
  SkincareFormSchema
)
