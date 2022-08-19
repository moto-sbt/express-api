import express, { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();

const SECRET_KEY = 'xxxxxxx'

router.post('/login', (req: Request, res: Response, next: NextFunction) => {

  // ID, PW取得
  const username = req.body.username;
  const password = req.body.password;

  // 認証（仮）
  if (username === "xxxx" && password === "xxxx") {
    const token = jwt.sign({ username: username }, SECRET_KEY, { expiresIn: '1h'});
    res.json({
      token: token
    });
  } else {
    res.json({
      error: "auth error"
    });
  }
  next();
})

export default router