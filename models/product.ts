import { Schema, models, model, Model } from "mongoose"
import { ProductType } from "@/typescript/types"

const productSchema = new Schema<ProductType>({
  title: String,
  image: String,
  text: String,
  price: Number
})

const Product: Model<ProductType> = models.Product || model("Product", productSchema)

export default Product