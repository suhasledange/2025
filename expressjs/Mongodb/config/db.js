import mongoose from "mongoose";

export const connectDB = async ()=>{
const MONGODB_URI = 'mongodb+srv://suhasledange:Suhas1081@cluster0.tc3c2cw.mongodb.net/express'

await mongoose.connect(MONGODB_URI).then(()=>{
    console.log('Database Connected');
    
})
}


