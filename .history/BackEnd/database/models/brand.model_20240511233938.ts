import mongoose, { Schema } from 'mongoose'

const BrandSchema = new Schema({
  name: String,
})

export const BrandModel = mongoose.model('brands', BrandSchema)
