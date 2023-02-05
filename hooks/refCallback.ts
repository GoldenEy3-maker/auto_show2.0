import { useCallback, useRef } from 'react'

export default function useRefCallback(callback?: (node: HTMLElement) => void) {
  const ref = useRef<HTMLElement | null>(null)

  const refCallback = useCallback((node: HTMLElement) => {
    if (node) {
      ref.current = node
      
      if (callback) callback(node)
    }
  }, [callback])

  return [refCallback, ref]
}