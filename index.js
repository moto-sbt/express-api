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

app.get("/products", (req,res) => {
  const products = [
  {
    id: 1,
    name: "taro",
  },
  {
    id: 2,
    name: "jiro",
  },
  {
    id: 3,
    name: "saburo",
  },
 ];

 res.json(products);
});

app.use((req, res, next) => {
  console.log("middleware before after")
  next()
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})