import express from "express"
const app = express()
import cors from "cors"
import bodyParser from "body-parser"

const port = 3000

app.use(cors())
app.use(bodyParser.json())

app.get("/",(req ,  res)=> {
    res.send("hello world")
})

app.post('/', (req, res) => { 
    console.log(req.body)
    res.send('Hello World!')
})

app.listen(port, ()=>{
    console.log(`app is listning at port ${port}`);
    
})