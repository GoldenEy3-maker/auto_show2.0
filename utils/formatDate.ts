export function formatPrice(price: number) {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    currencyDisplay: 'symbol',
    maximumFractionDigits: 0
  }).format(price)
}

export function formatDate(date: Date, daysAgo: number, locale: string = 'ru-RU') {
  let dateOptions: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric'
  }

  if (daysAgo > 365) {
    dateOptions = { year: 'numeric', month: 'short' }
  }

  if (daysAgo > 7 && daysAgo < 365) {
    dateOptions = { ...dateOptions, day: 'numeric', month: 'short', year: 'numeric' }
  }

  if (daysAgo < 7) {
    dateOptions = { ...dateOptions, weekday: 'short', }
  }

  return {
    fullDate: new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    }).format(date),

    dynamicDate: new Intl.DateTimeFormat(locale, dateOptions).format(date)
  }
}
