import express from 'express';
import {
  getAllPersonnelTrainings,
  getPersonnelTrainingById,
  createPersonnelTraining,
  updatePersonnelTraining,
  deletePersonnelTraining,
} from '../controllers/personnelTrainingController.js';

const router = express.Router();

router.get('/', getAllPersonnelTrainings);
router.get('/:id', getPersonnelTrainingById);
router.post('/', createPersonnelTraining);
router.put('/:id', updatePersonnelTraining);
router.delete('/:id', deletePersonnelTraining);

export default router;
