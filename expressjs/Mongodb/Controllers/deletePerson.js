import mongoose from "mongoose";
import { Person } from "../models/Person.js";

export const deletePerson = async (req,res)=>{
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({
            error:'Invalud ID format'
        })
    }

    try {
        const deletePerson = await Person.findByIdAndDelete(id);

        if(!deletePerson){
            return res.status(404).json({
                error:'Person not found'
            })
        }

        res.status(200).json({
            message:'Person deleted successfully',
            person:deletePerson
        })
        
    } catch (error) {
        console.error('Error deleting person:',error)
        res.status(500).json({
            error:'Internal server error'
        });
    }
}