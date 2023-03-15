import { z } from "zod"
import { publicProcedure, router } from "../trpc"
import { newsRouter } from "@/server/routers/news"
import { favoritesRouter } from "@/server/routers/favorites"

export const appRouter = router({
  news: newsRouter,
  favorites: favoritesRouter
})

export type AppRouter = typeof appRouter