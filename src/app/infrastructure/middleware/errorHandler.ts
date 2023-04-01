import { Request, Response, NextFunction } from 'express';

/**
 * Expressのエラーハンドリング用ミドルウェアです。
 *
 * @function errorHandler
 * @param {Error} error - エラーオブジェクト
 * @param {Request} req - リクエストオブジェクト
 * @param {Response} res - レスポンスオブジェクト
 * @param {NextFunction} next - 次のミドルウェア関数
 */
function errorHandler(error: Error, req: Request, res: Response, next: NextFunction) {
  console.error(`Error occurred: ${error.message}`);
  res.status(500).json({ error: 'Internal Server Error' });
}

export { errorHandler };