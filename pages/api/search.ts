import { NextApiRequest, NextApiResponse } from "next"
import { APIResponse, ProductItemType } from "@/typescript/types"
import { HydratedDocument, Query, Error as MongoError } from "mongoose"
import connectToMongo from "@/utils/mongodb"
import Product from "@/models/product"

export default async function handler(req: NextApiRequest, res: NextApiResponse<APIResponse<HydratedDocument<ProductItemType> | Query<ProductItemType[], ProductItemType> | undefined>>) {
  try {
    await connectToMongo()

    const searchValue: string = req.body

    if (searchValue === "") throw new Error("Произошла ошибка: Передана пустая строка")

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

    res.send({ data: JSON.parse(JSON.stringify(products)), isSuccess: true, message: "Success" })
  } catch (error: unknown) {
    if (error instanceof Error || error instanceof MongoError)
      res.status(400).send({ data: undefined, message: error.message, isSuccess: false })

    res.status(500).send({ data: undefined, message: "Произошла неожиданнаяа ошибка!", isSuccess: false })
  }
}