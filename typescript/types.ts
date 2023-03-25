export type InteractionElementsStyleType = "normal" | "danger" | "gray"

export type CustomDate = {
  _date: string
}

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

export type NewsType = {
  _id: string
  title: string
  text: string
  image: string
} & CustomDate

export type UserType = {
  _id: string
  name: string
  favorites: UserFavoriteProduct[]
}

export type UserFavoriteProduct = {
  product: ProductType
} & CustomDate

export interface ProductType {
  _id?: string
  image: string
  title: string
  text: string
  price: number
}

export type ErrorAPIResponse = { message: string }

export type APIResponse<DataType = any> = DataType | ErrorAPIResponse