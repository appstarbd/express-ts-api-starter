import { wrapError, DBError, NotNullViolationError, UniqueViolationError } from 'db-errors'

export default function (err): Error {
  err = wrapError(err);
  let message, name
  let error
  if (err instanceof UniqueViolationError) {
    name ='UniqueViolationError'
    message = `Unique constraint ${err.constraint} failed for table ${err.table} and columns ${err.columns}`
  } else if (err instanceof NotNullViolationError) {
    name ='NotNullViolationError'
    message =  `Not null constraint failed for table ${err.table} and column ${err.column}`
  } else if (err instanceof DBError) {
    name = 'UnknownDBError'
    message = 'Some unknown DB error'
  } else {
    return err
  }
  error = new Error(message)
  error.code = name
  error.statusCode = err.statusCode
  return error
}