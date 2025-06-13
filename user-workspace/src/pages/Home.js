import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { personnelService, serviceService, trainingService, personnelTrainingService } from '../services/api';

function Home() {
  const [stats, setStats] = useState({
    personnel: 0,
    services: 0,
    trainings: 0,
    completedTrainings: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [
        personnelRes,
        servicesRes,
        trainingsRes,
        personnelTrainingsRes
      ] = await Promise.all([
        personnelService.getAll(),
        serviceService.getAll(),
        trainingService.getAll(),
        personnelTrainingService.getAll()
      ]);

      const completedTrainings = personnelTrainingsRes.data.filter(
        pt => pt.status === 'Completed'
      ).length;

      setStats({
        personnel: personnelRes.data.length,
        services: servicesRes.data.length,
        trainings: trainingsRes.data.length,
        completedTrainings
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Personnel Training Management System
        </h1>
        <p className="text-xl text-gray-600">
          Manage your personnel, services, and training records efficiently
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Personnel</h3>
          <div className="text-3xl font-bold text-blue-600 mb-4">{stats.personnel}</div>
          <Link to="/personnel" className="text-blue-600 hover:text-blue-700 font-medium">
            View Personnel →
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Services</h3>
          <div className="text-3xl font-bold text-blue-600 mb-4">{stats.services}</div>
          <Link to="/services" className="text-blue-600 hover:text-blue-700 font-medium">
            View Services →
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Training Programs</h3>
          <div className="text-3xl font-bold text-blue-600 mb-4">{stats.trainings}</div>
          <Link to="/trainings" className="text-blue-600 hover:text-blue-700 font-medium">
            View Trainings →
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Completed Trainings</h3>
          <div className="text-3xl font-bold text-blue-600 mb-4">{stats.completedTrainings}</div>
          <Link to="/personnel-trainings" className="text-blue-600 hover:text-blue-700 font-medium">
            View Records →
          </Link>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            to="/personnel"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Add New Personnel
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Add New Service
          </Link>
          <Link
            to="/trainings"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Add New Training
          </Link>
          <Link
            to="/personnel-trainings"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Record Training
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">About the System</h3>
        <p className="text-gray-600">
          This Personnel Training Management System helps you track and manage your
          organization's personnel, their assigned services, and training progress.
          Use the navigation menu or quick actions to access different features.
        </p>
      </div>
    </div>
  );
}

export default Home;
