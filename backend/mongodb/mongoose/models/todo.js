import mongoose from "mongoose"

// making schema
// by defining the schema it checks the validation that entered data is in correct type or not

const todoschema = new mongoose.Schema({
    title : String,
    desc : String,
    isdone : Boolean
})

export const todo = mongoose.model("todo", todoschema)