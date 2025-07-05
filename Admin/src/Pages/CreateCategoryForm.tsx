import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export const CreateCategoryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    icon: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // ✅ React Router navigation

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      await axios.post('http://localhost:4000/api/createProjectCats', formData);
      setSuccess('Category created successfully!');
      setFormData({ name: '', description: '', icon: '' });

      // ✅ Redirect to categories page after short delay
      setTimeout(() => {
        navigate('/Categories');
      }, 1000);
    } catch (err: any) {
      console.error(err);
      setError(err?.response?.data?.error || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 max-w-xl mx-auto mt-10"
    >
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        Create New Category
      </h2>

      {success && <p className="text-green-600 dark:text-green-400 mb-4">{success}</p>}
      {error && <p className="text-red-600 dark:text-red-400 mb-4">{error}</p>}

      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 mb-1">Name</label>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg dark:bg-gray-900 dark:text-white border-gray-300 dark:border-gray-700"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 mb-1">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={3}
          className="w-full px-4 py-2 border rounded-lg dark:bg-gray-900 dark:text-white border-gray-300 dark:border-gray-700"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 dark:text-gray-300 mb-1">Icon (e.g. `fas fa-truck`)</label>
        <input
          type="text"
          name="icon"
          value={formData.icon}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg dark:bg-gray-900 dark:text-white border-gray-300 dark:border-gray-700"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors disabled:opacity-50"
      >
        {loading ? 'Creating...' : 'Create Category'}
      </button>
    </motion.form>
  );
};
