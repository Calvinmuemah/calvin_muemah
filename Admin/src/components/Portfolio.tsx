import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Search, Calendar, FolderOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

/* ---------- Types ---------- */
interface Project {
  _id: string;
  name: string;
  description?: string;
  // backend may send category as an ID string *or* a populated object
  category?: string | { _id: string; name: string };
  featured: boolean;
  image?: string;
  technologies?: string[];
  createdAt?: string;
}

interface Category {
  _id: string;
  name: string;
}

/* ---------- Component ---------- */
export const Portfolio: React.FC = () => {
  const navigate = useNavigate();

  /* Data */
  const [projects, setProjects] = useState<Project[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  /* Filters & UI state */
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | string>('all');
  const [selectedStatus, setSelectedStatus] =
    useState<'all' | 'featured' | 'not-featured'>('all');
  const [expandedTechId, setExpandedTechId] = useState<string | null>(null);

  /* Fetch projects + categories */
  useEffect(() => {
    (async () => {
      try {
        const [projRes, catRes] = await Promise.all([
          axios.get<Project[]>('http://localhost:4000/api/getProjects'),
          axios.get<Category[]>('http://localhost:4000/api/getProjectCats'),
        ]);
        setProjects(projRes.data);
        setCategories(catRes.data);
      } catch (e) {
        console.error(e);
        setError('Failed to load portfolio data');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  /* ---------- Filtering ---------- */
  const filtered = projects.filter((p) => {
    const textMatch =
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description?.toLowerCase().includes(searchTerm.toLowerCase());

    // Normalize category ID from either format
    const projCatId =
      typeof p.category === 'string' ? p.category : p.category?._id;

    const catMatch =
      selectedCategory === 'all' || projCatId === selectedCategory;

    const statusMatch =
      selectedStatus === 'all' ||
      (selectedStatus === 'featured' ? p.featured : !p.featured);

    return textMatch && catMatch && statusMatch;
  });

  /* ---------- Helpers ---------- */
  const statusLabel = (f: boolean) => (f ? 'Featured' : 'Not Featured');
  const statusColor = (f: boolean) =>
    f
      ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
      : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';

  /* ---------- JSX ---------- */
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 lg:p-8"
    >
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Portfolio Projects
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your portfolio projects and showcase your work.
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate('/projects/new')}
          className="mt-4 lg:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add New Project
        </motion.button>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 mb-6">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>

          {/* Category filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="all">All Categories</option>
            {categories.map((c) => (
              <option key={c._id} value={c._id}>
                {c.name}
              </option>
            ))}
          </select>

          {/* Status filter */}
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value as any)}
            className="px-4 py-2 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="all">All Status</option>
            <option value="featured">Featured</option>
            <option value="not-featured">Not Featured</option>
          </select>
        </div>
      </div>

      {/* Loading / error messages */}
      {loading && <p className="text-center text-gray-600 dark:text-gray-400">Loading…</p>}
      {error && <p className="text-center text-red-600 dark:text-red-400">{error}</p>}

      {/* Project grid */}
      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((p, idx) => {
              const expanded = expandedTechId === p._id;
              const techs = p.technologies ?? [];
              const visibleTechs = expanded ? techs : techs.slice(0, 2);
              const remaining = techs.length - 2;

              return (
                <motion.div
                  key={p._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: idx * 0.08 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow group"
                >
                  {/* Image */}
                  <div className="relative">
                    <img
                      src={p.image || 'https://via.placeholder.com/600x400?text=No+Image'}
                      alt={p.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span
                      className={`absolute top-3 left-3 text-xs px-2 py-1 rounded-full ${statusColor(
                        p.featured
                      )}`}
                    >
                      {statusLabel(p.featured)}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Title + description */}
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {p.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">
                      {p.description}
                    </p>

                    {/* Tech tags */}
                    {techs.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {visibleTechs.map((t) => (
                          <span
                            key={t}
                            className="text-xs px-2 py-1 bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 rounded-full"
                          >
                            {t}
                          </span>
                        ))}
                        {!expanded && remaining > 0 && (
                          <button
                            onClick={() => setExpandedTechId(p._id)}
                            className="text-xs px-2 py-1 bg-gray-50 text-gray-600 dark:bg-gray-700 dark:text-gray-300 rounded-full"
                          >
                            +{remaining}
                          </button>
                        )}
                        {expanded && (
                          <button
                            onClick={() => setExpandedTechId(null)}
                            className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-300 rounded-full"
                          >
                            Show less
                          </button>
                        )}
                      </div>
                    )}

                    {/* Meta */}
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 gap-1">
                      <Calendar className="w-4 h-4" />
                      {p.createdAt?.substring(0, 10) || '—'}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      )}

      {/* Empty state */}
      {!loading && !error && filtered.length === 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
          <FolderOpen className="w-16 h-16 mx-auto text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            No projects found
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Try adjusting your filters or add a new project.
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};
