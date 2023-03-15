import getConfig from "next/config"
import { createTRPCNext } from "@trpc/next"
import { AppRouter } from "@/server/routers/_app"
import { httpBatchLink, loggerLink } from "@trpc/client"
import superjson from "superjson"

const { publicRuntimeConfig } = getConfig()

function getBaseURL() {
  return `${publicRuntimeConfig.APP_URL}`
}

export const trpc = createTRPCNext<AppRouter>({
  config({ ctx }) {
    if (typeof window !== "undefined") {
      return {
        transformer: superjson,
        links: [
          httpBatchLink({
            url: "/api/trpc"
          })
        ]
      }
    }

    return {

      links: [
        loggerLink({
          enabled: (opts) => (process.env.NODE_ENV === "development" && typeof window !== "undefined") || (opts.direction === "down" && opts.result
            instanceof Error)
        }),
        httpBatchLink({
            url: `${getBaseURL()}/api/trpc`,
            headers() {
              if (ctx?.req) {
                const { connection: _connection, ...headers } = ctx.req.headers

                return {
                  ...headers,
                  "x-ssr": 1
                }
              }

              return {}
            },
            fetch: async (url, options) => {
              return fetch(url, {
                ...options,
                credentials: "include"
              })
            }
          }
        )
      ],
      transformer: superjson,
      queryClientConfig: {
        defaultOptions: {
          queries: {
            refetchOnMount: false,
            refetchOnWindowFocus: false
          }
        }
      }
    }
  },
  ssr: true
})