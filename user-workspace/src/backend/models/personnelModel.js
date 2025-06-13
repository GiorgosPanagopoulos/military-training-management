import mongoose from 'mongoose';

const personnelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rank: { type: String, required: true },
  serviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
}, { timestamps: true });

const Personnel = mongoose.model('Personnel', personnelSchema);

export default Personnel;
