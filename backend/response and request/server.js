const express=require('express')
const app=express()
const port = 3000

app.post('/',(req,res) => {
  res.send('hello world post')
})

app.use(express.static("public"))

// sending file
app.get("index",(req,res) => {
  res.sendFile('serve a file/data/index.html', {root:__dirname})
})

app.get("download",(req,res) => {
  res.download('serve a file/data/index.html', {root:__dirname})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
 