import mongoose from "mongoose"


const data = new mongoose.Schema({
    name: String,
    salary: Number,
    city: String,
    ismanager: Boolean
})

export const gdata = mongoose.model("gdata", data)