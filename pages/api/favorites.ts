import { NextApiRequest, NextApiResponse } from "next"
import { APIResponse, ProductType, UserFavoriteProduct } from "@/typescript/types"
import connectToMongo from "@/utils/mongodb"
import { FilterModes, FilterNames } from "@/typescript/enums"
import User from "@/models/user"
import favorites from "@/pages/favorites"

interface RequestBody {
  filter: FilterNames
  filterMode: FilterModes
  searchValue: string
}

export default async function favoritesHandler(req: NextApiRequest, res: NextApiResponse<APIResponse<UserFavoriteProduct[]>>) {
  try {
    await connectToMongo()

    const { filter, filterMode, searchValue }: RequestBody = req.body

    const user = await User.findOne({ name: "Admin" }).populate("favorites.product")

    if (!user) throw new Error("Такого пользователя не существует!")

    const filteredFavorites = user.favorites.filter(({ product }) => {
        if (!searchValue) return product

        const value = searchValue.trim().toLowerCase()
        const title = product.title.trim().toLowerCase()
        const text = product.text.trim().toLowerCase()

        return title.includes(value) || text.includes(value)
      }
    )

    const sortedFavorites = filteredFavorites.sort((a, b) => {
      const productA = a.product as ProductType
      const productB = b.product as ProductType

      if (filter === "by-price") {
        if (filterMode === "ascending") {
          return productA.price - productB.price
        }

        return productB.price - productA.price
      }

      if (filter === "by-name") {

        if (filterMode === "ascending") {
          return +productA.title - +productB.title
        }

        return +productB.title - +productA.title
      }

      if (filterMode === "ascending") {
        return +a.addDate - +b.addDate
      }

      return +b.addDate - +a.addDate
    })

    res.send(sortedFavorites)
  } catch (error: unknown) {
    if (error instanceof Error)
      res.send({ message: error.message })

    res.status(500).send({ message: "Произошла неожиданная ошибка сервера!" })
  }
}