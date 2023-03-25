import { MutableRefObject, useRef } from "react"

export function useTimeout(): [(callback: () => void, delay: number) => void, () => void, MutableRefObject<NodeJS.Timeout | undefined>] {
  const timerRef = useRef<NodeJS.Timeout>()

  function stopTimeout() {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = undefined
    }
  }

  function startTimeout(callback: () => void, delay: number) {
    stopTimeout()

    timerRef.current = setTimeout(callback, delay)
  }

  return [startTimeout, stopTimeout, timerRef]
}