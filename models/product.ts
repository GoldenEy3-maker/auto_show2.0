import {Schema, models, model, Model} from "mongoose";
import {ProductItemType} from "@/typescript/types";

const productSchema = new Schema<ProductItemType>({
  title: String,
  image:  String,
  text: String,
  price: Number
})

const Product: Model<ProductItemType> = models.Product || model('Product', productSchema)

export default Product