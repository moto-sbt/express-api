export const isAuthorized = (req, res, next) => {
  const auth = req.headers.authorization;
  if (auth === 'secretpassword') {
    next()
  } else {
    res.status(401);
    res.send('Not permitted');
  }
}

// 認証用ミドルウェア
const auth = (req, res, next) => {
  let token = '';
}