import mongoose, { Schema } from 'mongoose'

const DeletedProductSchema = new Schema(
  {
    name: { type: String, required: true, maxlength: 160 },
    image: { type: String, required: true, maxlength: 1000 },
    images: [{ type: String, maxlength: 1000 }],
    description: { type: String },
    category: { type: mongoose.SchemaTypes.ObjectId, ref: 'categories' },
    brand: { type: mongoose.SchemaTypes.ObjectId, ref: 'brandes' },
    price: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
    price_before_discount: { type: Number, default: 0 },
    quantity: { type: Number, default: 0 },
    stockQuantity: { type: Number, default: 0 },
    sold: { type: Number, default: 0 },
    view: { type: Number, default: 0 },
    status: { type: String },
  },
  {
    timestamps: true,
  }
)
export const DeletedProductModel = mongoose.model(
  'deletedproducts',
  DeletedProductSchema
)
