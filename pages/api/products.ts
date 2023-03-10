import { NextApiRequest, NextApiResponse } from "next"
import { APIResponse, ProductType } from "@/typescript/types"
import connectToMongo from "@/utils/mongodb"
import Product from "@/models/product"

export default async function productsHandler(req: NextApiRequest, res: NextApiResponse<APIResponse<ProductType[]>>) {
  try {
    await connectToMongo()

    const products = await Product.find()

    res.send(products)
  } catch (error: unknown) {
    if (error instanceof Error)
      res.send({ message: error.message })

    res.status(500).send({ message: "Произошла неожиданная ошибка сервера!" })
  }
}