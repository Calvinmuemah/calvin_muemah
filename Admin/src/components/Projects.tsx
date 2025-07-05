import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Plus, Trash2, Pencil } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

/* ---------- Types ---------- */
interface Project {
  _id: string;
  name: string;
  description?: string;
  image?: string;
  technologies?: string[];
  demo?: string;
  github?: string;
}

/* ---------- Component ---------- */
export const Projects: React.FC = () => {
  const navigate = useNavigate();

  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [deletingId, setDeletingId] = useState<string | null>(null);

  /* Fetch projects */
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get<Project[]>(
          'http://localhost:4000/api/getProjects'
        );
        setProjects(data);
      } catch (err) {
        console.error(err);
        setError('Failed to load projects');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  /* Delete handler */
  const handleDelete = async (id: string) => {
    if (!confirm('Delete this project?')) return;
    try {
      setDeletingId(id);
      await axios.delete(`http://localhost:4000/api/deleteProject/${id}`);
      setProjects((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      console.error(err);
      alert('Failed to delete project');
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
          Projects
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage your project portfolio and showcase your work.
        </p>
      </div>

      {/* Add Project */}
      <div className="mb-10 text-center">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate('/projects/new')}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 mx-auto transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add New Project
        </motion.button>
      </div>

      {/* Loading / Error */}
      {loading && (
        <p className="text-center text-gray-600 dark:text-gray-400">Loading projects...</p>
      )}
      {error && (
        <p className="text-center text-red-600 dark:text-red-400">{error}</p>
      )}

      {/* All Projects */}
      {!loading && !error && (
        <>
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
            All Projects
          </h2>

          {projects.length === 0 ? (
            <p className="text-gray-600 dark:text-gray-400">No projects yet.</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, idx) => (
                <motion.div
                  key={project._id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="relative group rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
                >
                  {/* Image */}
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-48 object-cover"
                    />
                  ) : (
                    <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400">
                      No image
                    </div>
                  )}

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-center px-4">
                    <h3 className="text-white text-lg font-semibold mb-3">{project.name}</h3>

                    {/* Tech badges */}
                    {project.technologies?.length && (
                      <div className="mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="inline-block bg-white/80 text-gray-800 px-2 py-0.5 rounded-full text-xs mr-1 mb-1"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Demo / GitHub links */}
                    <div className="flex gap-2 mb-4">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="bg-white/90 hover:bg-white text-gray-800 px-3 py-1 rounded text-sm transition-colors"
                        >
                          Live
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="border border-white text-white hover:bg-white hover:text-gray-800 px-3 py-1 rounded text-sm transition-colors"
                        >
                          GitHub
                        </a>
                      )}
                    </div>

                    {/* Edit & Delete */}
                    <div className="flex gap-3">
                      <button
                        title="Edit"
                        onClick={() => navigate(`/projects/${project._id}/edit`)}
                        className="p-2 rounded-full bg-white/90 hover:bg-white transition-colors"
                      >
                        <Pencil className="w-4 h-4 text-gray-800" />
                      </button>
                      <button
                        title="Delete"
                        disabled={deletingId === project._id}
                        onClick={() => handleDelete(project._id)}
                        className="p-2 rounded-full bg-white/90 hover:bg-white transition-colors disabled:opacity-50"
                      >
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </button>
                    </div>
                  </div>

                  {/* Card body (visible always) */}
                  <div className="p-5 bg-white dark:bg-gray-800">
                    <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-1">
                      {project.name}
                    </h5>
                    <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                      {project.description || 'No description'}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </>
      )}
    </motion.div>
  );
};
