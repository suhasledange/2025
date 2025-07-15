import { Person } from "../models/Person.js";

export const updatePerson = async (req, res) => {
  try {
    const { id, ...updateFields } = req.body;

    if (!id) {
      return res.status(400).json({ error: 'ID is required' });
    }

   const updatedPerson = await Person.findOneAndUpdate(
  { _id: id },       // ✅ wrap in object
  updateFields,
  { new: true }
);

    if (!updatedPerson) {
      return res.status(404).json({ error: 'Person not found' });
    }

    res.status(200).json({
      message: 'Person updated successfully',
      person: updatedPerson
    });
  } catch (error) {
    console.error('Error updating person:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};