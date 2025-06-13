import PersonnelTraining from '../models/personnelTrainingModel.js';

// Get all personnel trainings
export const getAllPersonnelTrainings = async (req, res) => {
  try {
    const personnelTrainings = await PersonnelTraining.find()
      .populate('personnelId')
      .populate('trainingId');
    res.json(personnelTrainings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get personnel training by ID
export const getPersonnelTrainingById = async (req, res) => {
  try {
    const personnelTraining = await PersonnelTraining.findById(req.params.id)
      .populate('personnelId')
      .populate('trainingId');
    if (!personnelTraining) return res.status(404).json({ message: 'PersonnelTraining not found' });
    res.json(personnelTraining);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new personnel training
export const createPersonnelTraining = async (req, res) => {
  const { personnelId, trainingId, score, successPercentage } = req.body;
  const newPersonnelTraining = new PersonnelTraining({ personnelId, trainingId, score, successPercentage });
  try {
    const savedPersonnelTraining = await newPersonnelTraining.save();
    res.status(201).json(savedPersonnelTraining);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update personnel training
export const updatePersonnelTraining = async (req, res) => {
  try {
    const updatedPersonnelTraining = await PersonnelTraining.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPersonnelTraining) return res.status(404).json({ message: 'PersonnelTraining not found' });
    res.json(updatedPersonnelTraining);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete personnel training
export const deletePersonnelTraining = async (req, res) => {
  try {
    const deletedPersonnelTraining = await PersonnelTraining.findByIdAndDelete(req.params.id);
    if (!deletedPersonnelTraining) return res.status(404).json({ message: 'PersonnelTraining not found' });
    res.json({ message: 'PersonnelTraining deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
