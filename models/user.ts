import { Schema, models, model, Model } from "mongoose"
import { UserType } from "@/typescript/types"
import Product from "./product"

const userSchema = new Schema<UserType>({
  name: { type: String },
  favorites: [{
    product: { type: Schema.Types.ObjectId, ref: Product },
    addDate: Date
  }]
})

const User: Model<UserType> = models.User || model("User", userSchema)

export default User