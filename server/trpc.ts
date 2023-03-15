import { initTRPC } from "@trpc/server"
import superjson from "superjson"
import { Context } from "@/server/context"
import { filterProcedureInputs } from "@/zod/types"

const t = initTRPC.context<Context>().create({
  transformer: superjson
})

export const router = t.router
export const publicProcedure = t.procedure
export const filterProcedure = t.procedure.input(filterProcedureInputs)
