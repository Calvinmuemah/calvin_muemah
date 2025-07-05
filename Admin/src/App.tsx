import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { Portfolio } from './components/Portfolio';
import { Projects } from './components/Projects';
import { Media } from './components/Media';
import { Analytics } from './components/Analytics';
import { Users } from './components/Users';
import { Settings } from './components/Settings';
import { Categories } from './components/categories';
import { CreateCategoryForm } from './Pages/CreateCategoryForm'; // ✅ Your form page
import { CreateProjectForm } from './Pages/CreateProjectForm';

// 🔁 React Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const components = {
  dashboard: Dashboard,
  portfolio: Portfolio,
  projects: Projects,
  media: Media,
  analytics: Analytics,
  users: Users,
  settings: Settings,
  categories: Categories,
};

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const ActiveComponent = components[activeTab as keyof typeof components];

  return (
    <ThemeProvider>
      <Router>
        <div className="flex h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

          <main className="flex-1 overflow-auto lg:ml-0">
            <Routes>
              {/* 🧭 Main dashboard tabs */}
              <Route
                path="/"
                element={
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="h-full"
                    >
                      <ActiveComponent />
                    </motion.div>
                  </AnimatePresence>
                }
              />

              {/* ➕ Category creation page */}
              <Route path="/categories/new" element={<CreateCategoryForm />} />
              <Route path="/projects/new" element={<CreateProjectForm />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
