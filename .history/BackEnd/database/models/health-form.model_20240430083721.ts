import mongoose, { Schema } from 'mongoose'

const HealthFormSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    height: { type: Number }, // Chiều cao của người dùng
    weight: { type: Number }, // Cân nặng của người dùng
    blood_pressure: { type: String }, // Huyết áp của người dùng
    medical_history: [{ type: String }], // Lịch sử bệnh lý của người dùng (mảng với nhiều lịch sử)
    allergies: [{ type: String }], // Các loại dị ứng của người dùng (mảng với nhiều loại dị ứng)
    current_health_conditions: [{ type: String }], // Tình trạng sức khỏe hiện tại của người dùng (mảng với nhiều tình trạng)
    dietary_restrictions: [{ type: String }], // Hạn chế dinh dưỡng của người dùng (mảng với nhiều hạn chế)
    other_notes: { type: String },
  },
  {
    timestamps: true, // Tự động thêm trường createdAt và updatedAt
  }
)

export const HealthFormModel = mongoose.model('health_forms', HealthFormSchema)
