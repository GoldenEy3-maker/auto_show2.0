import { formatDate } from "@/utils/formatDate"
import { useRouter } from 'next/router'
import { useEffect, useState } from "react"

export function useFormatedDate(date: Date) {
  const router = useRouter()
  const [formatedDate, setFormatedDate] = useState<ReturnType<typeof formatDate> & { dateDiff: number }>()

  useEffect(() => {
    const dateDiff = Date.now() - date.getTime()
    const daysAgo = dateDiff / 1000 / 60 / 60 / 24

    setFormatedDate({ ...formatDate(date, daysAgo, router.locale), dateDiff: dateDiff })
  }, [router.locale])

  return formatedDate
}