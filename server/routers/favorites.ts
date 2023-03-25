import User from "@/models/user"
import { filterProcedure, router } from "@/server/trpc"
import connectToMongo from "@/utils/mongodb"
import { searchFilterByObject } from "@/utils/searchFilter"
import { TRPCError } from "@trpc/server"

export const favoritesRouter = router({
  list: filterProcedure.query(async ({ input }) => {
    await connectToMongo()

    const { filter, filterMode, searchValue } = input

    const user = await User.findOne({ name: "Admin" }).populate("favorites.product")

    if (!user) throw new TRPCError({ message: "Такого пользователя не существует!", code: "UNAUTHORIZED" })

    if (!user.favorites.length) {
      throw new TRPCError({ code: 'NOT_FOUND', message: "У вас нет товаров в избранном!" })
    }

    const filteredFavorites = user.favorites.filter((item) => searchFilterByObject(item.product, searchValue, ["title", "text"]))

    const sortedFavorites = filteredFavorites.sort((
      { product: productA, _date: _dateA },
      { product: productB, _date: _dateB }
    ) => {
      const dateA = new Date(_dateA)
      const dateB = new Date(_dateB)

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
        return dateA.getTime() - dateB.getTime()
      }

      return dateB.getTime() - dateA.getTime()
    })

    return sortedFavorites
  })
})