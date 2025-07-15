import express from 'express'
import cookieParser from 'cookie-parser'
import session from 'express-session'

const app = express()
const PORT = 3000
app.use(express.json())
app.use(cookieParser())
app.use(session({
    secret:'sample-secret',
    resave:false,
    saveUninitialized:false
}))


const users = []
app.post('/register',async (req,res)=>{
    const {username,password} = req.body

    users.push({
        username,
        password
    })

    res.send("User Registered")
})

app.post('/login',async (req,res)=>{
    const {username,password} = req.body
    const user = users.find(u => u.username === username)
    if(!user || password !== user.password){
        return res.send("Not Authorized")
    }
    req.session.user = user
    res.send("User Logged in")
})

app.get('/dashboard',(req,res)=>{
    if(!req.session.user){
        return res.send("Not Authorized")
    }
    res.send(`Welcome , ${req.session.user}`)
})



app.listen(PORT,()=>{
    console.log('Running')
})