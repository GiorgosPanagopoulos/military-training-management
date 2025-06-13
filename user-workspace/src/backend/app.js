import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import personnelRoutes from './routes/personnelRoutes.js';
import serviceRoutes from './routes/serviceRoutes.js';
import trainingRoutes from './routes/trainingRoutes.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/personnel', personnelRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/trainings', trainingRoutes);
app.use('/api/auth', authRoutes);

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})
.catch((error) => {
  console.error('MongoDB connection error:', error);
});

export default app;
