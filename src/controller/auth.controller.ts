import express, { Request, Response, NextFunction } from 'express';
import { createToken } from '../lib/authorized';

const router = express.Router();

router.post('/login', (req: Request, res: Response, next: NextFunction) => {

  // ID, PW取得
  const username = req.body.username;
  const password = req.body.password;

  // 認証（仮）
  if (username === "xxxx" && password === "xxxx") {
    const token = createToken(username);
    res.json({ token: token });
  } else {
    res.json({ error: "auth error" });
  }
  next();
})

export default router