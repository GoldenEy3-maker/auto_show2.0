import { NextApiRequest, NextApiResponse } from "next"
import { APIResponse, ProductType } from "@/typescript/types"
import { Error as MongoError } from "mongoose"
import connectToMongo from "@/utils/mongodb"
import Product from "@/models/product"

export default async function searchHandler(req: NextApiRequest, res: NextApiResponse<APIResponse<ProductType[]>>) {
  try {
    await connectToMongo()

    const { body } = req

    if (!body) throw new Error("Поступил пустой запрос")

    const { searchValue } = body

    const products = await Product.find({
      $or: [
        { title: { $regex: searchValue.toLowerCase(), $options: "i" } }, {
          text: {
            $regex: searchValue.toLowerCase(),
            $options: "i"
          }
        }
      ]
    })

    res.send(products)
  } catch (error: unknown) {
    if (error instanceof Error || error instanceof MongoError)
      res.status(400).send({ message: error.message })

    res.status(500).send({ message: "Произошла неожиданнаяа ошибка сервера!" })
  }
}