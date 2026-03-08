import mongoose from "mongoose"
import express from "express"
import { todo } from "./models/todo.js"

let a = await mongoose.connect("mongodb://localhost:27017/todo")

const app = express()
const port = 3000

// creating new document
app.get("/", async (req, res) => {
  const t = new todo({ title: "ajay yadav", desc: "it is decsription", isdone: false });
  const saved = await t.save();
  res.send("it is working perfectly")
})

// find in document
app.get("/find", async (req, res) => {
  const s = await todo.findOne({});
  res.json({ title: todo.title, desc: todo.desc })
})



app.listen(port, () => {
  console.log(" app is running at port check it out 3000");

})

