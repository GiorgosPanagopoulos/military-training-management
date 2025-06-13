import * as personnelDao from '../dao/personnelDao.js';

export const getAllPersonnel = () => {
  return personnelDao.getAllPersonnel();
};

export const getPersonnelById = (id) => {
  return personnelDao.getPersonnelById(id);
};

export const createPersonnel = (personnelData) => {
  // Add any business logic or validation here if needed
  return personnelDao.createPersonnel(personnelData);
};

export const updatePersonnel = (id, updateData) => {
  // Add any business logic or validation here if needed
  return personnelDao.updatePersonnel(id, updateData);
};

export const deletePersonnel = (id) => {
  return personnelDao.deletePersonnel(id);
};
