import express from 'express'
const app = express()
const port = 3000


app.use((req, res, next) => {
  console.log("middleware before request")
  next()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/users", (req, res) => {
  res.json([
    {
      id: 1,
      name: "User Userson",
    },
  ]);
});

app.get("/products", (req, res) => {
  res.json([
    {
      id: 1,
      name: "The Bluest Eye",
    },
  ]);
});

app.use((req, res, next) => {
  console.log("middleware before after")
  next()
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})