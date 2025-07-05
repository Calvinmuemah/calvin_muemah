const express = require('express');
const router  = express.Router();
const ctrl    = require('../controllers/projectCats');

// /api/categories
router.post('/createProjectCats',ctrl.createCategory);
router.get('/getCategories',ctrl.getCategories);
router.get('/projectCats/:id',ctrl.getCategoryById);
router.put('/projectCats/:id',ctrl.updateCategory);
router.delete('/projectCats/:id',ctrl.deleteCategory);

module.exports = router;
