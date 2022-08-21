import { Request, Response, NextFunction } from 'express';
import { isTokenValid } from '../lib/authorized'

// 認証用ミドルウェア
export class AuthMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    let token = '';
    if (req.headers.authorization &&
        req.headers.authorization.split(' ')[0] === 'Bearer') {
      token = req.headers.authorization.split(' ')[1];
    } else {
      return next('token none');
    }

    // token の検証
    if(isTokenValid(token)) {
      next();
    } else {
      res.status(401);
      res.send('Not permitted');
    }
  }
}