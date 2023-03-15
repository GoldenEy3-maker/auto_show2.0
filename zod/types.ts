import { z } from "zod"
import { FilterModes, FilterNames } from "@/typescript/enums"

export const filterProcedureInputs = z.object({
  filter: z.nativeEnum(FilterNames).optional(),
  filterMode: z.nativeEnum(FilterModes).optional(),
  searchValue: z.string().optional()
})

export type FilterProcedureInputs = z.infer<typeof filterProcedureInputs>