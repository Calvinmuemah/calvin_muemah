import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Plus, Tag, Trash2, Pencil } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Category {
  _id: string;
  name: string;
  description?: string;
  icon?: string;
  projects?: string[];
}

export const Categories: React.FC = () => {
  const navigate = useNavigate();

  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [deletingId, setDeletingId] = useState<string | null>(null);

  // Fetch categories on mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get<Category[]>(
          'http://localhost:4000/api/getProjectCats'
        );
        setCategories(data);
      } catch (err) {
        console.error(err);
        setError('Failed to load categories');
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  /* ---------- DELETE HANDLER ---------- */
  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this category?')) return;

    try {
      setDeletingId(id);
      await axios.delete(`http://localhost:4000/api/projectCats/${id}`);
      setCategories((prev) => prev.filter((c) => c._id !== id));
    } catch (err) {
      console.error(err);
      alert('Failed to delete category');
    } finally {
      setDeletingId(null);
    }
  };

  /* ---------- JSX ---------- */
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 lg:p-8"
    >
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Categories
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Create and organize project categories to keep your portfolio structured.
        </p>
      </div>

      {/* Add Category Button */}
      <div className="mb-10 text-center">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate('/categories/new')}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 mx-auto transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add New Category
        </motion.button>
      </div>

      {/* Loading / Error / Empty states */}
      {loading && (
        <p className="text-center text-gray-600 dark:text-gray-400">Loading categories...</p>
      )}

      {error && (
        <p className="text-center text-red-600 dark:text-red-400">{error}</p>
      )}

      {!loading && !error && categories.length === 0 && (
        <div className="text-center text-gray-600 dark:text-gray-400">
          <Tag className="w-16 h-16 mx-auto mb-4 text-gray-400" />
          <p>No categories found. Start by creating one!</p>
        </div>
      )}

      {/* Categories Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => (
          <div
            key={cat._id}
            className="relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
          >
            {/* --- Action Buttons --- */}
            <div className="absolute top-3 right-3 flex gap-2">
              {/* Edit */}
              <button
                title="Edit"
                onClick={() => navigate(`/categories/${cat._id}/edit`)}
                className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <Pencil className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              </button>

              {/* Delete */}
              <button
                title="Delete"
                onClick={() => handleDelete(cat._id)}
                disabled={deletingId === cat._id}
                className="p-1.5 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/40 transition-colors disabled:opacity-50"
              >
                <Trash2 className="w-4 h-4 text-red-600 dark:text-red-400" />
              </button>
            </div>

            {/* Icon */}
            {cat.icon ? (
              <div className="text-4xl text-blue-600 dark:text-blue-400 mb-4">
                <i className={cat.icon} />
              </div>
            ) : (
              <Tag className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-4" />
            )}

            {/* Name */}
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {cat.name}
            </h3>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
              {cat.description || 'No description'}
            </p>

            {/* Project count badge */}
            {cat.projects && (
              <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm">
                {cat.projects.length} {cat.projects.length === 1 ? 'Project' : 'Projects'}
              </span>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};
