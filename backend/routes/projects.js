const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projects');

router.post('/createProject', projectController.createProject);
router.get('/getProjects', projectController.getProjects);
router.get('/project/:id', projectController.getProjectById);
router.put('/project/:id', projectController.updateProject);
router.delete('/deleteProject/:id', projectController.deleteProject);

router.get('/getProjectsByCat', projectController.getProjectsByCat);
router.get('/getProjectCount', projectController.getProjectCount);
router.get('/getFeaturedProjects', projectController.getFeaturedProjects);

module.exports = router;