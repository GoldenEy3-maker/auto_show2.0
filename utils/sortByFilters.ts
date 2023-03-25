import { FilterModes, FilterNames } from "@/typescript/enums"
import { CustomDate } from "@/typescript/types"

export function sortByFilters<DataType extends { title: string, price?: number } & CustomDate>(data: DataType[], filter: FilterNames | undefined, filterMode: FilterModes | undefined) {
  return data.sort((a, b) => {
    const dateA = new Date(a._date)
    const dateB = new Date(b._date)

    if (filter === FilterNames.ByName) {
      if (filterMode === FilterModes.Ascending) return +a.title - +b.title

      return +b.title - +a.title
    }

    if (filter === FilterNames.ByPrice && a.price && b.price) {
      if (filterMode === FilterModes.Ascending) return a.price - b.price

      return b.price - a.price
    }

    if (filterMode === FilterModes.Ascending) return dateA.getTime() - dateB.getTime()

    return dateB.getTime() - dateA.getTime()
  })
}