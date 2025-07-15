import { Person } from "../models/Person.js";

export const getPersons = async (req, res) => {
  try {

    const persons = await Person.find();

    res.status(200).json({
        message:'All persons fetched',
        count:persons.length,
        persons
    })

  } catch (error) {
    console.error("Error getting data",error)
    res.status(500).json({
        error:'Internal Server error'
    })
  }
};