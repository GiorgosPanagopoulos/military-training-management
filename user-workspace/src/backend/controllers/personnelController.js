import * as personnelService from '../services/personnelService.js';

// Get all personnel
export const getAllPersonnel = async (req, res) => {
  try {
    const personnel = await personnelService.getAllPersonnel();
    res.json(personnel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get personnel by ID
export const getPersonnelById = async (req, res) => {
  try {
    const personnel = await personnelService.getPersonnelById(req.params.id);
    if (!personnel) return res.status(404).json({ message: 'Personnel not found' });
    res.json(personnel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new personnel
export const createPersonnel = async (req, res) => {
  try {
    const savedPersonnel = await personnelService.createPersonnel(req.body);
    res.status(201).json(savedPersonnel);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update personnel
export const updatePersonnel = async (req, res) => {
  try {
    const updatedPersonnel = await personnelService.updatePersonnel(req.params.id, req.body);
    if (!updatedPersonnel) return res.status(404).json({ message: 'Personnel not found' });
    res.json(updatedPersonnel);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete personnel
export const deletePersonnel = async (req, res) => {
  try {
    const deletedPersonnel = await personnelService.deletePersonnel(req.params.id);
    if (!deletedPersonnel) return res.status(404).json({ message: 'Personnel not found' });
    res.json({ message: 'Personnel deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
