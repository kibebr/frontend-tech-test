import { TaskEither, tryCatch } from 'fp-ts/TaskEither'
import { toError } from 'fp-ts/Either'
import { constant } from 'fp-ts/function'

export const safeJson = <T = unknown>(res: Response): TaskEither<Error, T> => tryCatch(
  constant(res.json()),
  toError
)
