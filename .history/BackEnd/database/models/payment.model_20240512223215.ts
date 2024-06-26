import mongoose, { Schema } from 'mongoose'
import { STATUS_PURCHASE } from '../../constants/purchase'

const PurchaseSchema = new Schema(
  {
    purchase: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'purchases' }],
    totalMoney: { type: Number, default: 0 },
    name: { type: String },
    street: { type: String },
    city: { type: String },
    phone: { type: String },
    paymentMethod: { type: Number, default: 0 },
    // 0: cash 1:paypal
  },
  {
    timestamps: true,
  }
)
declare global {
  namespace Express {
    interface Request {
      purchase?: string
    }
  }
}
export const PurchaseModel = mongoose.model('purchases', PurchaseSchema)
