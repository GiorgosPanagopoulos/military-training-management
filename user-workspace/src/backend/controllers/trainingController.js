import Training from '../models/trainingModel.js';

// Get all trainings
export const getAllTrainings = async (req, res) => {
  try {
    const trainings = await Training.find();
    res.json(trainings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get training by ID
export const getTrainingById = async (req, res) => {
  try {
    const training = await Training.findById(req.params.id);
    if (!training) return res.status(404).json({ message: 'Training not found' });
    res.json(training);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new training
export const createTraining = async (req, res) => {
  const { name, description } = req.body;
  const newTraining = new Training({ name, description });
  try {
    const savedTraining = await newTraining.save();
    res.status(201).json(savedTraining);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update training
export const updateTraining = async (req, res) => {
  try {
    const updatedTraining = await Training.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTraining) return res.status(404).json({ message: 'Training not found' });
    res.json(updatedTraining);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete training
export const deleteTraining = async (req, res) => {
  try {
    const deletedTraining = await Training.findByIdAndDelete(req.params.id);
    if (!deletedTraining) return res.status(404).json({ message: 'Training not found' });
    res.json({ message: 'Training deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
