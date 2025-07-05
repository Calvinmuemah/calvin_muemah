import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface Category {
  _id: string;
  name: string;
}

export const CreateProjectForm: React.FC = () => {
  const navigate = useNavigate();

  /* ----------------- Category state ----------------- */
  const [categories, setCategories] = useState<Category[]>([]);
  const [loadingCats, setLoadingCats] = useState(true);
  const [catError, setCatError] = useState('');

  /* ----------------- Form state --------------------- */
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: '',
    technologies: '', // comma‑separated string
    featured: false,
    demo: '',
    github: '',
    category: '', // category _id selected
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  /* ---------- Fetch categories on mount ---------- */
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get<Category[]>(
          'http://localhost:4000/api/getProjectCats' // 🔁 adjust if needed
        );
        setCategories(data);
      } catch (err) {
        console.error(err);
        setCatError('Failed to load categories');
      } finally {
        setLoadingCats(false);
      }
    })();
  }, []);

  /* ---------------- Handlers ---------------- */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    // Prepare payload
    const payload = {
      ...formData,
      technologies: formData.technologies
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean),
    };

    try {
      await axios.post('http://localhost:4000/api/createProject', payload); // 🔁 adjust if needed
      setSuccess('Project created successfully!');
      setTimeout(() => navigate('/projects'), 1000);
    } catch (err: any) {
      console.error(err);
      setError(err?.response?.data?.error || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  /* ---------------- JSX ---------------- */
  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 max-w-2xl mx-auto mt-10"
    >
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
        Create New Project
      </h2>

      {success && <p className="text-green-600 dark:text-green-400 mb-4">{success}</p>}
      {error && <p className="text-red-600 dark:text-red-400 mb-4">{error}</p>}

      {/* Name */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Name *</label>
        <input
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg border dark:bg-gray-900"
        />
      </div>

      {/* Description */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Description</label>
        <textarea
          name="description"
          rows={3}
          value={formData.description}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg border dark:bg-gray-900"
        />
      </div>

      {/* Image URL */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Image URL</label>
        <input
          name="image"
          value={formData.image}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg border dark:bg-gray-900"
        />
      </div>

      {/* Technologies */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          Technologies (comma‑separated)
        </label>
        <input
          name="technologies"
          value={formData.technologies}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg border dark:bg-gray-900"
        />
      </div>

      {/* Demo & GitHub URLs */}
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium mb-1">Demo URL</label>
          <input
            name="demo"
            value={formData.demo}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border dark:bg-gray-900"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">GitHub URL</label>
          <input
            name="github"
            value={formData.github}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border dark:bg-gray-900"
          />
        </div>
      </div>

      {/* Featured toggle */}
      <div className="mb-4 flex items-center gap-2">
        <input
          type="checkbox"
          name="featured"
          checked={formData.featured}
          onChange={handleChange}
          id="featured"
          className="w-4 h-4"
        />
        <label htmlFor="featured" className="text-sm font-medium">
          Featured Project
        </label>
      </div>

      {/* Category select */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-1">Category *</label>
        {loadingCats ? (
          <p className="text-gray-600 dark:text-gray-400">Loading categories...</p>
        ) : catError ? (
          <p className="text-red-600 dark:text-red-400">{catError}</p>
        ) : (
          <select
            name="category"
            required
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border dark:bg-gray-900"
          >
            <option value="" disabled>
              -- Select Category --
            </option>
            {categories.map((c) => (
              <option key={c._id} value={c._id}>
                {c.name}
              </option>
            ))}
          </select>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors disabled:opacity-50"
      >
        {loading ? 'Creating...' : 'Create Project'}
      </button>
    </motion.form>
  );
};
