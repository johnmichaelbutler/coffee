import { DatabaseConnectionError } from './database-connection-error';
import { RequestValidationError } from './error-validation-error';
import { Request, Response, NextFunction } from 'express';
export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof RequestValidationError) {
    console.log('Handing this error as request validaiton error');
  }

  if (err instanceof DatabaseConnectionError) {
    console.log('Handing error as db conn err')
  }

  res.status(400).send({
    message: 'Something went wrong'
  })
}