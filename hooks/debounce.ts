import { useEffect, useState } from "react"


export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, value ? delay : 0)

    return () => clearTimeout(handler)
  }, [value, delay])

  return debouncedValue
}