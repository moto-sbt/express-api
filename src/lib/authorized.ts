import jwt from 'jsonwebtoken';

const SECRET_KEY = 'xxxxxxx'

export const createToken = (username: string): string => {
  return jwt.sign({ username: username }, SECRET_KEY, { expiresIn: '1h'});
}

export const isTokenValid = (token: string): boolean => {
  let isTokenValid = false;
  jwt.verify(token, SECRET_KEY, (err) => {
    if(!err) isTokenValid = true;
  })
  return isTokenValid;
}