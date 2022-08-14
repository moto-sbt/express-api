import express from 'express'
const app = express()

const isAuthorized = (req, res, next) => {
  const auth = req.headers.authorization;
  console.log(auth);
  if (auth === 'secretpassword') {
    next()
  } else {
    res.status(401);
    res.send('Not permitted');
  }
}

const port = 3000


app.use((req, res, next) => {
  console.log("middleware before request");
  next();
})

app.get('/', (req, res, next) => {
  res.send('Hello World!')
  next();
})

app.get("/users", isAuthorized, (req, res, next) => {
  res.json([
    {
      id: 1,
      name: "User Userson",
    },
  ]);
  next();
});

app.get("/products", (req, res, next) => {
  res.json([
    {
      id: 1,
      name: "The Bluest Eye",
    },
  ]);
  next();
});

app.use((req, res, next) => {
  console.log("middleware before after");
  next();
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})