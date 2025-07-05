const Project = require('../models/projects');
const Category = require('../models/projectCats');

// Create
exports.createProject = async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).json(project);
  } catch (err) {
    res.status(400).json({ error: 'Error creating project', details: err });
  }
};

// Read all
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching projects' });
  }
};

// Read one
exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ error: 'Project not found' });
    res.json(project);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching project' });
  }
};

// Update
exports.updateProject = async (req, res) => {
  try {
    const updated = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Project not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: 'Error updating project' });
  }
};

// Delete
exports.deleteProject = async (req, res) => {
  try {
    const deleted = await Project.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Project not found' });
    res.json({ message: 'Project deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Error deleting project' });
  }
};

// project count
exports.getProjectCount = async (req, res) => {
  try {
    const count = await Project.countDocuments({});
    res.status(200).json({ count });
  } catch (error) {
    console.error("Error fetching Project count:", error);
    res.status(500).json({ message: 'Error fetching Project', error: error.message });
  }
};

// get projects by cat name
exports.getProjectsByCat = async (req, res) => {
  try {
    const { category: categoryId, search } = req.query;
    const query = {};

    // 1. Filter by Category ID
    if (categoryId) {
      query.category = categoryId; // Matches ObjectId in the project schema
    }

    // 2. Filter by Search Query
    if (search) {
      const searchTerm = search;
      query.$or = [
        { name: { $regex: searchTerm, $options: 'i' } },
        { description: { $regex: searchTerm, $options: 'i' } },
      ];
    }

    // 3. Fetch matching projects
    const projects = await Project.find(query);

    res.status(200).json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({
      message: 'Server error while fetching projects',
      error: error.message,
    });
  }
};



// GET /api/projects/featured
exports.getFeaturedProjects = async (req, res) => {
  try {
    const projects = await Project.find({ featured: true }).limit(4);
    res.status(200).json(projects);
  } catch (error) {
    console.error('Error fetching featured projects:', error);
    res.status(500).json({ message: 'Server error fetching featured Projects.' });
  }
};