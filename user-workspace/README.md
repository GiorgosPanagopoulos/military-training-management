# Personnel Training Management System

[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](https://expressjs.com/)

A modern full-stack application for managing personnel training programs. Built with React and Node.js.

## 🚀 Technologies

### Frontend
- **React** with Next.js for modern UI development
- **React Router** for client-side routing
- **Axios** for API communication
- **Tailwind CSS** for modern styling
- **TypeScript** for type safety

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **JWT** for secure authentication
- **TypeScript** for enhanced development
- **Swagger** for API documentation

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/personnel-training-system.git
   cd personnel-training-system
   ```

2. Install dependencies:
   ```bash
   # Install frontend dependencies
   npm install

   # Install backend dependencies
   cd src/backend
   npm install
   ```

3. Create a `.env` file in the backend directory:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/personnel-training-db
   JWT_SECRET=your-secret-key-here
   ```

4. Ensure MongoDB is installed and running

## 🏃‍♂️ Running the Application

Development mode:
```bash
# Start backend (from src/backend directory)
npm run dev

# Start frontend (from root directory)
npm run dev
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- API Documentation: http://localhost:5000/api-docs

## 🎯 Features

### 1. Personnel Management
- ✨ Add/edit/delete personnel records
- 🔄 Assign to services
- 📊 View personnel statistics

### 2. Service Management
- 📝 Create and manage services
- 👥 Track personnel per service
- 📈 Service utilization metrics

### 3. Training Management
- 📚 Create/edit/delete training programs
- ⏱️ Track duration and type
- 🎓 Manage training materials

### 4. Personnel Training Tracking
- ✅ Assign trainings to personnel
- 📋 Record completion and scores
- 📊 Progress monitoring
- 📈 Performance analytics

### 5. Authentication & Security
- 🔐 Secure login/logout
- 🛡️ Protected routes
- 🎫 JWT token authentication
- 👤 Role-based access control

## 🏗️ Project Structure

```
src/
├── backend/
│   ├── controllers/    # Business logic
│   ├── models/        # Database schemas
│   ├── routes/        # API endpoints
│   ├── services/      # Business services
│   ├── dao/          # Data access layer
│   ├── types/        # TypeScript types
│   └── app.ts        # Express application
├── app/              # Next.js pages
├── components/       # React components
├── pages/           # React pages
├── services/        # Frontend services
└── App.js           # Main React component
```

## 🔌 API Endpoints

### Authentication
\`\`\`
POST   /api/auth/login          # User login
POST   /api/auth/logout         # User logout
\`\`\`

### Personnel
\`\`\`
GET    /api/personnel          # List all personnel
POST   /api/personnel          # Create new personnel
PUT    /api/personnel/:id      # Update personnel
DELETE /api/personnel/:id      # Delete personnel
\`\`\`

### Services
\`\`\`
GET    /api/services          # List all services
POST   /api/services          # Create new service
PUT    /api/services/:id      # Update service
DELETE /api/services/:id      # Delete service
\`\`\`

### Trainings
\`\`\`
GET    /api/trainings          # List all trainings
POST   /api/trainings          # Create new training
PUT    /api/trainings/:id      # Update training
DELETE /api/trainings/:id      # Delete training
\`\`\`

### Personnel Trainings
\`\`\`
GET    /api/personnelTrainings          # List all personnel trainings
POST   /api/personnelTrainings          # Create new personnel training
PUT    /api/personnelTrainings/:id      # Update personnel training
DELETE /api/personnelTrainings/:id      # Delete personnel training
\`\`\`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
