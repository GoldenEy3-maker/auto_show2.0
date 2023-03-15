import { NextApiRequest, NextApiResponse } from "next"
import { inferAsyncReturnType } from "@trpc/server"

export function createContext({ req, res }: { req: NextApiRequest, res: NextApiResponse }) {
  return { req, res }
}

export type Context = inferAsyncReturnType<typeof createContext>