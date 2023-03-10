export type InteractionElementsStyleType = "normal" | "danger" | "gray"

export type CartData = {
  id: number
  img: string
  title: string
  text: string
  quantity: number
  maxCount: number
  price: number
}

export type NotifyData = {
  id: number
  img: string
  title: string
  text: string
  date: Date
  isNew: boolean
}

export type FavoritesData = {
  id: number
  img: string
  title: string
  text: string
  price: number
}

export type NewsData = {
  id: number
  image: string
  title: string
  text: string
  date: Date
}

export interface ProductType {
  _id: string
  image: string
  title: string
  text: string
  price: number
}

export type ErrorAPIResponse = { message: string }

export type APIResponse<DataType = any> = DataType | ErrorAPIResponse