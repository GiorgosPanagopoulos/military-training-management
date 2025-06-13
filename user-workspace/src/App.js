import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Personnel from './pages/Personnel';
import Services from './pages/Services';
import Trainings from './pages/Trainings';
import PersonnelTrainings from './pages/PersonnelTrainings';
import Login from './pages/Login';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personnel" element={<Personnel />} />
          <Route path="/services" element={<Services />} />
          <Route path="/trainings" element={<Trainings />} />
          <Route path="/personnel-trainings" element={<PersonnelTrainings />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
