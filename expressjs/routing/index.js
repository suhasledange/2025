import express from 'express'
import { userLogin, userSingup } from './controller.js'
import router from './route.js'

const app = express()

app.get('/',(req,res)=>{
    res.send("Hello")
})

// //dynamic route 
// app.get('/user/:username',usernameController)
// //search?keyword=express
// app.get('/search',searchController)

// app.get('/user/login',userLogin)
// app.get('/user/signup',userSingup)

app.use('/user',router)

app.listen(3000,()=>{
    console.log("running")
})