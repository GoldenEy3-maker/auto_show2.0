import z from "zod"
import { FilterModes, FilterNames } from "@/typescript/enums"

export function sortByFilters<DataType>(data: DataType[], filter: FilterNames | undefined, filterMode: FilterModes | undefined) {
  return data.sort((a, b) => {
    let typeA = z.object({ _date: z.date().optional(), title: z.string().optional(), price: z.number().optional() })
    let typeB = typeA

    if (filter === "by-name") {
      if (filterMode === "ascending") {
        return +typeA.shape.title - +typeB.shape.title
      }

      return +typeB.shape.title - +typeA.shape.title
    }

    if (filter === "by-price") {
      if (filterMode === "ascending") {
        return +typeA.shape.price - +typeB.shape.price
      }

      return +typeB.shape.price - +typeA.shape.price
    }

    if (filterMode === "descending") {
      return +typeA.shape._date - +typeB.shape._date
    }

    return +typeB.shape._date - +typeA.shape._date
  })
}