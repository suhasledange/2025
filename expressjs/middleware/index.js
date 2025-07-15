import express from 'express'

const app = express()

app.use('/welcome',(req,res,next)=>{
    console.log('A new request received at'+Date.now())
    next()
})

app.get('/',(req,res)=>{
    res.send("Hello")
})

app.get('/welcome',(req,res)=>{
    res.send("Welcome")
})

app.get('/error',()=>{
    throw new Error('This is test error')
})
app.use((err,req,res,next)=>{
    console.error(err.message)
    res.send('Internal Server Error')
})
app.listen(3000,()=>{
    console.log("running")
})