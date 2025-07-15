import express from 'express'
import multer from 'multer'
import { storage } from './config/multer.js'

const app = express()

const upload = multer({
    storage,
    limits:{
        fileSize:1024000
    }
})

app.use(express.urlencoded({extended:true})) //for urlencoded data
// app.use(upload.array()) // for form-data
app.use(upload.single('image'))

app.get('/',(req,res)=>{
    res.send("Hello")
})

app.post('/form',(req,res)=>{
    console.log(req.body)
    console.log(req.file)
    res.send("Form Received")
})

app.listen(3000,()=>{
    console.log("running")
})