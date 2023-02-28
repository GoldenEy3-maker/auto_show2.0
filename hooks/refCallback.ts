import { RefCallback, RefObject, useCallback, useRef } from 'react'

export function useRefCallback<T>(callback?: (node: T) => void): [RefCallback<T>, RefObject<T>] {
  const ref = useRef<T>()

  const refCallback = useCallback<RefCallback<T>>((node) => {
    if (node) {
      ref.current = node

      if (callback) callback(node)
    }
  }, [callback])

  return [refCallback, ref as RefObject<T>]
}