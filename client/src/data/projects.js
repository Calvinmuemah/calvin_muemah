export const projectCategories = {
  transport: {
    name: 'Transport & Logistics',
    description: 'Solutions for transportation, logistics, and mobility services',
    icon: 'fas fa-truck',
    projects: [
      {
        name: 'FleetTrack Pro',
        description: 'Real-time fleet management system with GPS tracking, route optimization, and driver analytics.',
        image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Google Maps API'],
        featured: true,
        demo: 'https://example.com',
        github: 'https://github.com'
      },
      {
        name: 'RideShare App',
        description: 'Mobile application for ride-sharing with real-time matching and payment integration.',
        image: 'https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['React Native', 'Express.js', 'PostgreSQL', 'Stripe API'],
        featured: false,
        demo: 'https://example.com'
      },
      {
        name: 'Logistics Dashboard',
        description: 'Comprehensive dashboard for managing supply chain operations and inventory tracking.',
        image: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['Vue.js', 'Python', 'Django', 'PostgreSQL', 'D3.js'],
        featured: false,
        github: 'https://github.com'
      }
    ]
  },
  
  agriculture: {
    name: 'Agriculture & Farming',
    description: 'Digital solutions for modern farming and agricultural management',
    icon: 'fas fa-seedling',
    projects: [
      {
        name: 'FarmSmart Analytics',
        description: 'IoT-based crop monitoring system with weather integration and yield prediction algorithms.',
        image: 'https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['React', 'Python', 'TensorFlow', 'IoT Sensors', 'AWS'],
        featured: true,
        demo: 'https://example.com'
      },
      {
        name: 'Crop Management System',
        description: 'Complete farm management solution with planting schedules, inventory, and financial tracking.',
        image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['Angular', 'Node.js', 'MySQL', 'Chart.js'],
        featured: false,
        demo: 'https://example.com',
        github: 'https://github.com'
      },
      {
        name: 'Livestock Tracker',
        description: 'RFID-based livestock tracking system with health monitoring and breeding records.',
        image: 'https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['React', 'Firebase', 'RFID Technology', 'PWA'],
        featured: false
      }
    ]
  },
  
  ecommerce: {
    name: 'E-commerce',
    description: 'Online shopping platforms and digital marketplace solutions',
    icon: 'fas fa-shopping-cart',
    projects: [
      {
        name: 'TechStore Pro',
        description: 'Full-featured e-commerce platform with inventory management, payment processing, and analytics.',
        image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['Next.js', 'Stripe', 'MongoDB', 'Redis', 'Cloudinary'],
        featured: true,
        demo: 'https://example.com',
        github: 'https://github.com'
      },
      {
        name: 'Fashion Marketplace',
        description: 'Multi-vendor marketplace for fashion brands with advanced filtering and recommendation engine.',
        image: 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['React', 'GraphQL', 'PostgreSQL', 'Elasticsearch'],
        featured: true,
        demo: 'https://example.com'
      },
      {
        name: 'Grocery Delivery App',
        description: 'Mobile app for grocery delivery with real-time tracking and scheduling features.',
        image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['React Native', 'Node.js', 'MongoDB', 'Socket.io'],
        featured: false,
        github: 'https://github.com'
      }
    ]
  },
  
  healthcare: {
    name: 'Healthcare',
    description: 'Medical and healthcare management systems',
    icon: 'fas fa-stethoscope',
    projects: [
      {
        name: 'MedRecords Portal',
        description: 'Secure patient records management system with appointment scheduling and telemedicine features.',
        image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['React', 'Node.js', 'PostgreSQL', 'HIPAA Compliance', 'WebRTC'],
        featured: true,
        demo: 'https://example.com'
      },
      {
        name: 'Pharmacy Management',
        description: 'Complete pharmacy management system with inventory, prescriptions, and billing.',
        image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['Vue.js', 'Express.js', 'MySQL', 'PDF Generation'],
        featured: false,
        demo: 'https://example.com',
        github: 'https://github.com'
      }
    ]
  },
  
  education: {
    name: 'Education',
    description: 'Learning management systems and educational technology',
    icon: 'fas fa-graduation-cap',
    projects: [
      {
        name: 'EduPlatform LMS',
        description: 'Comprehensive learning management system with video streaming, quizzes, and progress tracking.',
        image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['React', 'Node.js', 'MongoDB', 'AWS S3', 'Video.js'],
        featured: true,
        demo: 'https://example.com',
        github: 'https://github.com'
      },
      {
        name: 'Student Portal',
        description: 'Student information system with grades, attendance, and communication features.',
        image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['Angular', 'Python', 'Django', 'PostgreSQL'],
        featured: false,
        demo: 'https://example.com'
      }
    ]
  },
  
  fintech: {
    name: 'Fintech',
    description: 'Financial technology and payment solutions',
    icon: 'fas fa-coins',
    projects: [
      {
        name: 'CryptoWallet Pro',
        description: 'Secure cryptocurrency wallet with multi-currency support and DeFi integration.',
        image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['React', 'Web3.js', 'Solidity', 'MetaMask Integration'],
        featured: true,
        demo: 'https://example.com'
      },
      {
        name: 'Investment Tracker',
        description: 'Portfolio management app with real-time market data and analytics.',
        image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['Vue.js', 'Python', 'FastAPI', 'Alpha Vantage API'],
        featured: false,
        github: 'https://github.com'
      }
    ]
  }
}