import { Request, Response, NextFunction } from 'express';

/**
 * 認証用ミドルウェアです。
 *
 * @function authenticate
 * @param {Request} req - リクエストオブジェクト
 * @param {Response} res - レスポンスオブジェクト
 * @param {NextFunction} next - 次のミドルウェア関数
 * @throws {Error} 認証エラーが発生した場合
 */
function authenticate(req: Request, res: Response, next: NextFunction) {
  // TODO: boilerplateのためここは各自で使用したいものを使用する

  // const token = req.headers['authorization'];

  // if (!token) {
  //   res.status(401).json({ error: 'Authorization header not found' });
  //   return;
  // }

  // 本来はトークンの検証処理が必要ですが、今回は省略します。

  next();
}

export { authenticate };