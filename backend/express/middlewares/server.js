const express=require("express")
const app=express()
const port=3000
const blog=require("./routes/router")

// normal flow
app.get('/',(req,res) => {
  res.send("hello response")
})

app.get("/about",(req,res) => {
  res.send("it is about")
})


//middlewares

app.use("/",(req,res,next) => {
  console.log("middleware 1");
  next()

})

app.use("/",(req,res,next) => {
  console.log("middleware 2");
  next()

})

app.use("/",(req,res,next) => {
  console.log("middleware 3");
  console.log(`${Date.now()} is a ${req.method}`);
  next()

})

//normal router

app.use("/router",blog)

// middleware in router

app.use("/rmiddleware",blog)

app.listen(port,() => {
  console.log("running at port 3000");
})
