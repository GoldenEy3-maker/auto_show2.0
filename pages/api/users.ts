import { NextApiRequest, NextApiResponse } from "next"
import { APIResponse } from "@/typescript/types"
import connectToMongo from "@/utils/mongodb"
import User from "@/models/user"

export default async function usersHandler(req: NextApiRequest, res: NextApiResponse<APIResponse>) {
  try {
    await connectToMongo()

    const user = await User.findOne({ name: "Admin" })

    if (!user) throw new Error("Такого пользователя не существует!")

    const isItemInFavorite = user.favorites.some(({ product }) => {
      return product._id === ""
    })

    res.send(isItemInFavorite)
  } catch (error: unknown) {
    if (error instanceof Error) res.send({ message: error.message })

    res.send({ message: "Произошла неожиданная ошибка!" })
  }
}