import express from 'express'
// import cookieParser from 'cookie-parser'
import session from 'express-session'

const app = express()
const PORT = 3000

app.use(session({
    secret:'sample-secret',
    resave:false,
    saveUninitialized:false
}))


app.get('/visit',(req,res)=>{

    if(req.session.page_views){
        req.session.page_views++;
        res.send(`You visited this page ${req.session.page_views} times`)
    }else{
        req.session.page_views = 1
        res.send("Welcome to this page for first time")
    }

})

app.get('/remove-visit',(req,res)=>{
    req.session.destroy()
    res.send("Session Removed")
})

// app.use(cookieParser())

// app.get('/',(req,res)=>{
//     res.cookie('name','express-app',{
//         maxAge:360000,
//         httpOnly:true,
//         secure:true
//     })
//     res.send("Hello")
// })

// app.get('/clearCookie',(req,res)=>{
//     res.clearCookie('name')
//     res.send('Cookie Cleared')
// })

app.listen(PORT,()=>{
    console.log('Running')
})