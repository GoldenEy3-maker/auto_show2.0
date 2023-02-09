import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners'

export default function Loader() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    function handleRouteStart() {
      setIsLoading(true)
    }

    function handleRouteStop() {
      setIsLoading(false)
    }

    router.events.on('routeChangeStart', handleRouteStart)
    router.events.on('routeChangeComplete', handleRouteStop)
    router.events.on('routeChangeError', handleRouteStop)

    return () => {
      router.events.off('routeChangeStart', handleRouteStart)
      router.events.off('routeChangeComplete', handleRouteStop)
      router.events.off('routeChangeError', handleRouteStop)
    }
  }, [router])

  return isLoading ? <ClipLoader color='white' /> : null
}
