import mongoose from 'mongoose';

const trainingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
}, { timestamps: true });

const Training = mongoose.model('Training', trainingSchema);

export default Training;
