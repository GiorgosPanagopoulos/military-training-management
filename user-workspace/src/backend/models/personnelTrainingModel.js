import mongoose from 'mongoose';

const personnelTrainingSchema = new mongoose.Schema({
  personnelId: { type: mongoose.Schema.Types.ObjectId, ref: 'Personnel', required: true },
  trainingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Training', required: true },
  score: { type: Number, required: true },
  successPercentage: { type: Number, required: true },
}, { timestamps: true });

const PersonnelTraining = mongoose.model('PersonnelTraining', personnelTrainingSchema);

export default PersonnelTraining;
