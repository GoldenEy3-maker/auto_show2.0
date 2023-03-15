import { Schema, models, model, Date, Model } from "mongoose"
import { NewsType } from "@/typescript/types"

const newsSchema = new Schema<NewsType>({
  title: String,
  image: String,
  text: String,
  _date: Date
})

const News: Model<NewsType> = models.News || model("News", newsSchema)

export default News