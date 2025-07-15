import express from 'express'
import { connectDB } from './config/db.js'
import { createPerson } from './Controllers/createPerson.js'
import { updatePerson } from './Controllers/updatePerson.js'
import { deletePerson } from './Controllers/deletePerson.js'
import { getPersons } from './Controllers/getPerson.js'

const app = express()
app.use(express.json())
await connectDB()


app.get('/',(req,res)=>{
    res.send("Hello se")
})

app.post('/person',createPerson)
app.put('/person',updatePerson)
app.delete('/person/:id',deletePerson)
app.get('/persons',getPersons)


app.listen(3000,()=>{
    console.log('Running')
})