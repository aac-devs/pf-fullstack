const { Router } = require('express');
const projectCategoryControllers = require('../controllers/projectCategory.controllers');
const projectController = require('../controllers/projectController');

const router = Router();

router.post('/category', projectCategoryControllers.create);
router.post('/', projectController.create);
router.get('/category', projectCategoryControllers.read);
router.get('/', projectController.read);

module.exports = router;
