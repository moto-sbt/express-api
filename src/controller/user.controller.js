import express from 'express';
import { isAuthorized } from '../lib/authorized.js';

const router = express.Router();

router.get('/users', isAuthorized, (req, res, next) => {
  res.json([
      {
        id: 1,
        name: "User Userson",
      },
    ]);
  next();
})

export default router