import { NextApiRequest, NextApiResponse } from "next"
import { APIResponse } from "@/typescript/types"
import connectToMongo from "@/utils/mongodb"
import User from "@/models/user"

export default async function usersHandler(req: NextApiRequest, res: NextApiResponse<APIResponse>) {
  try {
    await connectToMongo()

    const user = await User.findOne({ name: "Admin" })

    if (!user) throw new Error("Такого пользователя не существует!")

    // res.send(user.favorites)


    res.send("Успешно обновлено")
  } catch (error: unknown) {
    if (error instanceof Error) res.send({ message: error.message })

    res.send({ message: "Произошла неожиданная ошибка!" })
  }
}