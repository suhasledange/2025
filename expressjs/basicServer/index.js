import express from 'express'

const app = express()
const PORT = 3000

// define a simple route

app.get('/',(req,res)=>{
    res.send("Hello World runnig")
})

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})
