import { RefObject, useRef, useState } from 'react'

export function useStateRef<S>(
  defaultValue: S
): [S, (value: S) => void, RefObject<S>] {
  const ref = useRef<S>(defaultValue)
  const [state, _setState] = useState<S>(defaultValue)

  function setState(value: S) {
    _setState(value)
    ref.current = value
  }

  return [state, setState, ref]
}
