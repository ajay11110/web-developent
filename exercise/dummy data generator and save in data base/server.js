import mongoose from "mongoose"
import express from "express"
import { gdata } from "./datagenerator.js"

const port = 3000
const app = express()


let a = await mongoose.connect("mongodb://localhost:27017/cdata")

    app.get("/", async (req, res) => {
        await gdata.deleteMany({})

        let names = ["ajay", "vaibhav", "tanish"]
        let cities = ["jaipur", "sikar", "bhiwani"]
        let n = Math.floor(Math.random() * (2))

        let s = Math.floor(Math.random() * (9000000)) + 100000;
        let m = Math.floor(Math.random());



        const d = new gdata({
            name: names[n],
            salary: s,
            city: cities[n],
            ismanager: m
        })

        await d.save();

        res.send("running properly")
})


app.listen(port, () => {
    console.log("running at port", port)
})

