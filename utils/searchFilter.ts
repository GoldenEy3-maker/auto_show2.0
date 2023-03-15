import z from "zod"

export function searchFilter<DataType>(data: DataType[], value: string | undefined, filterKeys: (Extract<keyof DataType, string>)[]) {
  if (!value) return data

  return data.filter(item => filterKeys.some(key => z.string().parse(item[key]).trim().toLowerCase().includes(value.trim().toLowerCase())))
}

export function searchFilterByObject<DataType>(object: DataType, value: string | undefined, filterKeys: (Extract<keyof DataType, string>)[]) {
  if (!value) return object

  return filterKeys.some(key => z.string().parse(object[key]).trim().toLowerCase().includes(value.trim().toLowerCase()))
}