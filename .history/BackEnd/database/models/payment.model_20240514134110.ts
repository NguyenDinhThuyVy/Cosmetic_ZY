import mongoose, { Schema } from 'mongoose'
import { STATUS_ORDER } from '../../constants/purchase'

const PaymentSchema = new Schema(
  {
    purchase: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'purchases' }],
    totalMoney: { type: Number, default: 0 },
    name: { type: String },
    street: { type: String },
    city: { type: String },
    phone: { type: String },
    paymentMethod: { type: Number, default: 0 },
    status: { type: Number, default: STATUS_ORDER.WAIT_FOR_CONFIRMATION },
    // 0: cash 1:paypal
  },
  {
    timestamps: true,
  }
)
export const PaymentModel = mongoose.model('payments', PaymentSchema)
