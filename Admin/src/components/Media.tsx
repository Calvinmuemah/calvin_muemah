import React from 'react';
import { motion } from 'framer-motion';
import { Image, Upload } from 'lucide-react';

export const Media: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 lg:p-8"
    >
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Media Library
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage your images, videos, and other media files.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 text-center">
        <Image className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
          Media Management
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Upload and organize your media files for use in projects.
        </p>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 mx-auto transition-colors"
        >
          <Upload className="w-5 h-5" />
          Upload Media
        </motion.button>
      </div>
    </motion.div>
  );
};