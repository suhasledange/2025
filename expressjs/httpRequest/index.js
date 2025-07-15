import express from 'express'

const app = express()

app.get('/',(req,res)=>{
    res.send("Welcome")
})

app.use(express.json())

app.post('/user',(req,res)=>{
    const {name,email} = req.body;

    res.json({
        message:`User ${name} with email ${email} created successfully`
    })
})


app.put('/users/:id',(req,res)=>{
    const userId = req.params.id;

    const {name,email} = req.body

    res.json({
        message:`User ${userId} updated to ${name}, ${email}`
    })
})

app.delete('/user/:id',(req,res)=>{
    
    const userId = req.params.id;

    res.json({
        message:`User with id ${userId} deleted successfully`
    })
})

app.listen(3000,()=>{
    console.log("running")
})