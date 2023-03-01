export type InteractionElementsStyleType = 'normal' | 'danger' | 'gray'

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
  img: {
    src: string
    width: number
    height: number
  }
  title: string
  text: string
  date: Date
}