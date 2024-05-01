import mongoose, { Schema } from 'mongoose'

const BrandSchema = new Schema({
  name: String,
})

export const CategoryModel = mongoose.model('categories', BrandSchema)
