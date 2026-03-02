const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
  res.send("home page through router")
})

router.get("/", (req, res ,next) => {
  res.send("home page through router in middleware")
  console.log("working..........")
  next()
})

module.exports = router