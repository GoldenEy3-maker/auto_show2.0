import { ValueOf } from "./utils"

export const RouterPaths = {
  HomePage: "/",
  NewsPage: "/news",
  CatalogPage: "/catalog",
  FeedbackPage: "/feedback",
  SupportPage: "/support",
  ProfilePage: "/profile",
  CartPage: "/cart",
  FavoritesPage: "/favorites",
  NotifyPage: "/notify",
  SettingsPage: "/settings",
  AuthPage: "/auth",
  RegisterPage: "/register"
} as const

export const Themes = {
  System: 'system',
  Dark: 'dark',
  Light: 'light'
} as const

export const Langs = {
  Ru: 'ru',
  De: 'de',
  EnGB: 'en-GB',
  En: 'en'
} as const

export const Cities = {
  Moscow: 'Москва',
  SaintPetersburg: 'Санкт-Петербург',
  Novosibirsk: 'Новосибирск',
  Barnaul: 'Барнаул'
} as const

export const LocalStorageKyes = {
  IsNotifyOff: "notify-off"
} as const

export const FilterNames = {
  ByName: "by-name",
  ByPrice: "by-price",
  ByDate: "by-date"
} as const

export const FilterModes = {
  Ascending: "ascending",
  Descending: "descending"
}

export type RouterPaths = ValueOf<typeof RouterPaths>
export type Themes = ValueOf<typeof Themes>
export type Langs = ValueOf<typeof Langs>
export type Cities = ValueOf<typeof Cities>
export type LocalStorageKyes = ValueOf<typeof LocalStorageKyes>
export type FilterNames = ValueOf<typeof FilterNames>
export type FilterModes = ValueOf<typeof FilterModes>