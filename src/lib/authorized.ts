import { Request, Response, NextFunction } from 'express';

export const isAuthorized = (req: Request, res: Response, next: NextFunction) => {
  const auth = req.headers.authorization;
  if (auth === 'secretpassword') {
    next()
  } else {
    res.status(401);
    res.send('Not permitted');
  }
}

// 認証用ミドルウェア
const auth = (req: Request, res: Response, next: NextFunction) => {
  let token = '';
}