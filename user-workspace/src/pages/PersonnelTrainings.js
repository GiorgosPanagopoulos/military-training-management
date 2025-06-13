import React, { useState, useEffect } from 'react';
import { personnelTrainingService, personnelService, trainingService } from '../services/api';

function PersonnelTrainings() {
  const [personnelTrainings, setPersonnelTrainings] = useState([]);
  const [personnel, setPersonnel] = useState([]);
  const [trainings, setTrainings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    personnelId: '',
    trainingId: '',
    completionDate: '',
    status: '',
    score: ''
  });
  const [editingId, setEditingId] = useState(null);

  const statusOptions = [
    'Completed',
    'In Progress',
    'Not Started',
    'Failed'
  ];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [personnelTrainingsRes, personnelRes, trainingsRes] = await Promise.all([
        personnelTrainingService.getAll(),
        personnelService.getAll(),
        trainingService.getAll()
      ]);
      setPersonnelTrainings(personnelTrainingsRes.data);
      setPersonnel(personnelRes.data);
      setTrainings(trainingsRes.data);
    } catch (err) {
      setError('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await personnelTrainingService.update(editingId, formData);
      } else {
        await personnelTrainingService.create(formData);
      }
      fetchData();
      resetForm();
    } catch (err) {
      setError(err.response?.data?.message || 'Operation failed');
    }
  };

  const handleEdit = (personnelTraining) => {
    setFormData({
      personnelId: personnelTraining.personnelId,
      trainingId: personnelTraining.trainingId,
      completionDate: personnelTraining.completionDate?.split('T')[0] || '',
      status: personnelTraining.status,
      score: personnelTraining.score || ''
    });
    setEditingId(personnelTraining._id);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this record?')) {
      try {
        await personnelTrainingService.delete(id);
        fetchData();
      } catch (err) {
        setError('Failed to delete record');
      }
    }
  };

  const resetForm = () => {
    setFormData({
      personnelId: '',
      trainingId: '',
      completionDate: '',
      status: '',
      score: ''
    });
    setEditingId(null);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Personnel Trainings Management</h2>
      
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-800 rounded-md p-4 mb-6">
          {error}
        </div>
      )}

      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          {editingId ? 'Edit Record' : 'Add New Training Record'}
        </h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="personnel" className="block text-sm font-medium text-gray-700 mb-1">
                Personnel
              </label>
              <select
                id="personnel"
                value={formData.personnelId}
                onChange={(e) => setFormData({...formData, personnelId: e.target.value})}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                required
              >
                <option value="">Select Personnel</option>
                {personnel.map(person => (
                  <option key={person._id} value={person._id}>
                    {person.name} - {person.rank}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="training" className="block text-sm font-medium text-gray-700 mb-1">
                Training
              </label>
              <select
                id="training"
                value={formData.trainingId}
                onChange={(e) => setFormData({...formData, trainingId: e.target.value})}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                required
              >
                <option value="">Select Training</option>
                {trainings.map(training => (
                  <option key={training._id} value={training._id}>
                    {training.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="completionDate" className="block text-sm font-medium text-gray-700 mb-1">
                Completion Date
              </label>
              <input
                type="date"
                id="completionDate"
                value={formData.completionDate}
                onChange={(e) => setFormData({...formData, completionDate: e.target.value})}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <select
                id="status"
                value={formData.status}
                onChange={(e) => setFormData({...formData, status: e.target.value})}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                required
              >
                <option value="">Select Status</option>
                {statusOptions.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="score" className="block text-sm font-medium text-gray-700 mb-1">
                Score (%)
              </label>
              <input
                type="number"
                id="score"
                value={formData.score}
                onChange={(e) => setFormData({...formData, score: e.target.value})}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                min="0"
                max="100"
              />
            </div>
          </div>

          <div className="flex justify-start space-x-4">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {editingId ? 'Update' : 'Add'} Record
            </button>
            {editingId && (
              <button
                type="button"
                onClick={resetForm}
                className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900">Training Records</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Personnel
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Training
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Completion Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Score
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {personnelTrainings.map(record => (
                <tr key={record._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {personnel.find(p => p._id === record.personnelId)?.name || 'N/A'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {trainings.find(t => t._id === record.trainingId)?.name || 'N/A'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Date(record.completionDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                      ${record.status === 'Completed' ? 'bg-green-100 text-green-800' :
                        record.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                        record.status === 'Failed' ? 'bg-red-100 text-red-800' :
                        'bg-gray-100 text-gray-800'}`}>
                      {record.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {record.score ? `${record.score}%` : '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    <button
                      onClick={() => handleEdit(record)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(record._id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PersonnelTrainings;
