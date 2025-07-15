import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
    name:String,
    age:Number,
    email:String,
},{timestamps:true})

export const Person = mongoose.model("Person",personSchema)
