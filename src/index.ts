import express, { Application, Request, Response, NextFunction } from 'express';
// import user from './controller/user.controller.js';
// import auth from './controller/auth.controller.js';

const app: Application = express();
const port: number = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use((req: Request, res: Response, next: NextFunction) => {
  console.log("middleware before request");
  next();
});

// app.use(user);
// app.use(auth);

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello World!')
  next();
});

app.get("/products", (req: Request, res: Response, next: NextFunction) => {
  res.json([
    {
      id: 1,
      name: "The Bluest Eye",
    },
  ]);
  next();
});

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log("middleware after request");
  next();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});