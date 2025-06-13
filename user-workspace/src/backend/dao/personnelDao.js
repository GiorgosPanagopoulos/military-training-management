import Personnel from '../models/personnelModel.js';

export const getAllPersonnel = () => {
  return Personnel.find();
};

export const getPersonnelById = (id) => {
  return Personnel.findById(id);
};

export const createPersonnel = (personnelData) => {
  const personnel = new Personnel(personnelData);
  return personnel.save();
};

export const updatePersonnel = (id, updateData) => {
  return Personnel.findByIdAndUpdate(id, updateData, { new: true });
};

export const deletePersonnel = (id) => {
  return Personnel.findByIdAndDelete(id);
};
