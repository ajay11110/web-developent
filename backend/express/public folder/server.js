const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! how are you world')
})

app.get('/about', (req, res) => {
  res.send('Hello World! how are you about')
})

app.get('/web/new', (req, res) => {
  res.send('Hello World! how are you web')
})

app.get('/home', (req, res) => {
  res.send('Hello World! this is home page')
})

app.get('/home/:slug', (req, res) => {
  res.send(`Hello ${req.params.slug} `)
})

// to make folder public

app.use(express.static('mypublicfolder'))

app.use(express.static('public'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

