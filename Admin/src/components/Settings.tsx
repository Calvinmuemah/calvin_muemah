import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Bell, 
  Shield, 
  Palette, 
  Monitor,
  Sun,
  Moon,
  Globe,
  Mail,
  Lock,
  Eye,
  EyeOff
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const Settings: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [showPassword, setShowPassword] = React.useState(false);

  const settingSections = [
    {
      title: 'Profile Settings',
      icon: User,
      items: [
        { label: 'Full Name', type: 'input', value: 'John Doe' },
        { label: 'Email', type: 'input', value: 'john@example.com' },
        { label: 'Bio', type: 'textarea', value: 'Creative developer and designer...' },
        { label: 'Profile Picture', type: 'file', value: '' },
      ]
    },
    {
      title: 'Security',
      icon: Shield,
      items: [
        { label: 'Current Password', type: 'password', value: '' },
        { label: 'New Password', type: 'password', value: '' },
        { label: 'Two-Factor Authentication', type: 'toggle', value: true },
        { label: 'Login Notifications', type: 'toggle', value: false },
      ]
    },
    {
      title: 'Notifications',
      icon: Bell,
      items: [
        { label: 'Email Notifications', type: 'toggle', value: true },
        { label: 'Project Updates', type: 'toggle', value: true },
        { label: 'Marketing Emails', type: 'toggle', value: false },
        { label: 'Weekly Reports', type: 'toggle', value: true },
      ]
    },
    {
      title: 'Preferences',
      icon: Globe,
      items: [
        { label: 'Language', type: 'select', value: 'English', options: ['English', 'Spanish', 'French', 'German'] },
        { label: 'Timezone', type: 'select', value: 'UTC-5', options: ['UTC-12', 'UTC-8', 'UTC-5', 'UTC+0', 'UTC+8'] },
        { label: 'Date Format', type: 'select', value: 'MM/DD/YYYY', options: ['MM/DD/YYYY', 'DD/MM/YYYY', 'YYYY-MM-DD'] },
      ]
    }
  ];

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
          Settings
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage your account settings and preferences.
        </p>
      </div>

      <div className="max-w-4xl">
        {/* Theme Settings - Special Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 mb-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <Palette className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Appearance
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Theme Preference
              </label>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: 'light', label: 'Light', icon: Sun },
                  { value: 'dark', label: 'Dark', icon: Moon },
                  { value: 'system', label: 'System', icon: Monitor },
                ].map((option) => {
                  const Icon = option.icon;
                  const isActive = theme === option.value;
                  
                  return (
                    <motion.button
                      key={option.value}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={toggleTheme}
                      className={`
                        p-4 rounded-lg border-2 transition-all text-center
                        ${isActive
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                          : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 text-gray-600 dark:text-gray-400'
                        }
                      `}
                    >
                      <Icon className="w-6 h-6 mx-auto mb-2" />
                      <span className="text-sm font-medium">{option.label}</span>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Settings Sections */}
        {settingSections.map((section, sectionIndex) => {
          const SectionIcon = section.icon;
          
          return (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (sectionIndex + 2) }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 mb-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <SectionIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {section.title}
                </h2>
              </div>

              <div className="space-y-6">
                {section.items.map((item, itemIndex) => (
                  <div key={item.label} className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      {item.label}
                    </label>
                    
                    {item.type === 'input' && (
                      <input
                        type="text"
                        defaultValue={item.value}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    )}
                    
                    {item.type === 'password' && (
                      <div className="relative">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          defaultValue={item.value}
                          className="w-full px-4 py-2 pr-12 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    )}
                    
                    {item.type === 'textarea' && (
                      <textarea
                        rows={3}
                        defaultValue={item.value}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                      />
                    )}
                    
                    {item.type === 'select' && (
                      <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                        {item.options?.map(option => (
                          <option key={option} value={option} selected={option === item.value}>
                            {option}
                          </option>
                        ))}
                      </select>
                    )}
                    
                    {item.type === 'toggle' && (
                      <label className="flex items-center cursor-pointer">
                        <div className="relative">
                          <input
                            type="checkbox"
                            defaultChecked={item.value as boolean}
                            className="sr-only"
                          />
                          <div className={`block w-14 h-8 rounded-full transition ${
                            item.value ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                          }`}></div>
                          <div className={`absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${
                            item.value ? 'transform translate-x-6' : ''
                          }`}></div>
                        </div>
                      </label>
                    )}
                    
                    {item.type === 'file' && (
                      <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center hover:border-gray-400 dark:hover:border-gray-500 transition-colors">
                        <input type="file" className="hidden" id={`file-${sectionIndex}-${itemIndex}`} />
                        <label htmlFor={`file-${sectionIndex}-${itemIndex}`} className="cursor-pointer">
                          <div className="text-gray-400 mb-2">
                            <User className="w-8 h-8 mx-auto" />
                          </div>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            Click to upload or drag and drop
                          </span>
                        </label>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}

        {/* Save Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-end gap-4"
        >
          <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            Cancel
          </button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            Save Changes
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};