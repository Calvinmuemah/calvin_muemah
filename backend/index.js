const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const nodemailer = require("nodemailer");
const path = require('path');
const fs = require('fs');

// middlewares
const { errorHandler } = require('./middlewares/error');

// routes
const UserAuthRoutes = require('./routes/auth');
const projectRoutes = require('./routes/projects');
const categoryRoutes  = require('./routes/projectCats');



dotenv.config();
const app = express();
connectDB();

// Create data directory if it doesn't exist
const dataDir = path.join(__dirname, '..', 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

//route
app.get("/", (req, res) => {
  res.send("Hello from Me!");
});

// Routes
app.use('/api', UserAuthRoutes);
app.use('/api', projectRoutes);
app.use('/api', categoryRoutes);


// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something broke!' });
});

// Custom error middleware
app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});