const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.listen(port, () => console.log(`Listening on port ${port}`))

app.get("/", (req, res) => {
  res.send(`Welcome to my server! this is the page on port ${port}`)
})

app.get("/:name", (req, res) => {
  res.send(`Hello ${req.params.name}`)
})