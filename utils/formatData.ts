export function formatPrice(price: number) {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    currencyDisplay: 'symbol',
    maximumFractionDigits: 0
  }).format(price)
}

export function formatDate(passDate: Date, dateDiff: number) {
  const dateLocale = 'ru-RU'

  let dateOptions: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric'
  }
  let dateDetailedOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  }

  if (dateDiff > 1 && dateDiff < 7) {
    dateOptions = { ...dateOptions, weekday: 'short', }
  } else if (dateDiff > 7 && dateDiff < 365) {
    dateOptions = { ...dateOptions, day: 'numeric', month: 'short', year: 'numeric' }
  } else if (dateDiff > 365) {
    dateOptions = { year: 'numeric', month: 'short' }
  }

  return {
    fullDate: new Intl.DateTimeFormat(dateLocale, dateDetailedOptions).format(passDate),
    shortDate: new Intl.DateTimeFormat(dateLocale, dateOptions).format(passDate)
  }
}
