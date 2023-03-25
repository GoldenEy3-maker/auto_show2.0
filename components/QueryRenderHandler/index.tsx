import { TRPCClientErrorLike } from "@trpc/client"
import { AnyProcedure } from "@trpc/server"
import { ReactNode } from "react"

interface QueryRenderHandlerProps<DataType extends any[]> {
  data: DataType | undefined
  error: TRPCClientErrorLike<AnyProcedure> | null
  isFetching: boolean
  loadingSkeleton?: ReactNode
  isDataNullMessage?: string
  isDataLengthNullMessage?: string

  children(data: DataType): ReactNode
}

export default function QueryRenderHandler<DataType extends any[]>({
  data,
  error,
  isDataLengthNullMessage,
  isDataNullMessage,
  loadingSkeleton,
  isFetching,
  children,
}: QueryRenderHandlerProps<DataType>) {
  return (
    <>
      {isFetching ? (
        loadingSkeleton ?? <p>Loading...</p>
      ) : error ? (
        <p>{`Произошла ошибка (${
          error.data ? error.data.code : "UNEXPECTED"
        }): ${error.message}`}</p>
      ) : data ? (
        data.length > 0 ? (
          children(data)
        ) : (
          <p>
            {isDataLengthNullMessage ?? "Пока что данных нет! Попробуйте позже"}
          </p>
        )
      ) : (
        <p>
          {isDataNullMessage ?? "Не удалось получить данные! Попробуйте позже"}
        </p>
      )}
    </>
  )
}
