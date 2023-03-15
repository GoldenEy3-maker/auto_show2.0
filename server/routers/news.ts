import { filterProcedure, router } from "@/server/trpc"
import connectToMongo from "@/utils/mongodb"
import News from "@/models/news"
import { NewsType } from "@/typescript/types"
import { searchFilter } from "@/utils/searchFilter"
import { sortByFilters } from "@/utils/sortByFilters"

export const newsRouter = router({
  list: filterProcedure.query(async ({ input }) => {
    await connectToMongo()

    const { filter, filterMode, searchValue } = input

    const newsData: NewsType[] = await News.find()

    const filteredNews = searchFilter(newsData, searchValue, ["title", "text"])

    const sortedNews = sortByFilters(filteredNews, filter, filterMode)

    return sortedNews
  })
})