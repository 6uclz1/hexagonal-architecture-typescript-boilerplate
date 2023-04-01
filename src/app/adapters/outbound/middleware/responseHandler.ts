import { Request, Response, NextFunction } from 'express';
import { Result } from 'fpt-ts/lib/Result';

export const responseHandler = () => (req: Request, res: Response, next: NextFunction): void => {
  res.handleResult = (result: Result<unknown, string>): void => {
    if (result._tag === 'Right') {
      res.locals.body = result.right;
    } else {
      res.locals.error = result.left;
    }
    next();
  };
};
