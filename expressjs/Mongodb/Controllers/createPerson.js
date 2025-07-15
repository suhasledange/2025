import { Person } from "../models/Person.js";

export const createPerson = async (req,res)=>{
    
        console.log(req.body);
        const {name,age,email} = req.body
        const newPerson = new Person({
            name,
            age,
            email
        })
        await newPerson.save()
        console.log(newPerson)
        res.send('Person added')
        
}