import { useEffect, useState } from "react"

export function useDateDiff(passDate: Date) {
  const [dateDiff, setDateDiff] = useState<number>()

  useEffect(() => {
    setDateDiff(Date.now() - passDate.getTime())
  }, [passDate])

  return dateDiff
}