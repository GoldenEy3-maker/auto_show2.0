import { NextApiRequest, NextApiResponse } from "next"
import { APIResponse, NewsType } from "@/typescript/types"
import connectToMongo from "@/utils/mongodb"
import News from "@/models/news"

export default async function newsHandler(req: NextApiRequest, res: NextApiResponse<APIResponse<NewsType[]>>) {
  try {
    await connectToMongo()

    const news = await News.find()

    res.send(news)
  } catch (error: unknown) {
    if (error instanceof Error) res.send({ message: error.message })

    res.send({ message: "Произошла неожиданная ошибка!" })
  }
}