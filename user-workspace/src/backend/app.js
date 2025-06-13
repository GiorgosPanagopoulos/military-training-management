import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swagger.js';

import personnelRoutes from './routes/personnelRoutes.js';
import serviceRoutes from './routes/serviceRoutes.js';
import trainingRoutes from './routes/trainingRoutes.js';
import personnelTrainingRoutes from './routes/personnelTrainingRoutes.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use('/api/personnel', personnelRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/trainings', trainingRoutes);
app.use('/api/personnelTrainings', personnelTrainingRoutes);
app.use('/api/auth', authRoutes);

// Start server without MongoDB for now
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
