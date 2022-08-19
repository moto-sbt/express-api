import express, { Request, Response, NextFunction } from 'express';
import { isAuthorized } from '../middleware/auth.middleware';

const router = express.Router();

router.get('/users', isAuthorized, (req: Request, res: Response, next: NextFunction) => {
  res.json([
      {
        id: 1,
        name: "User Userson",
      },
    ]);
  next();
})

export default router