const { Router } = require('express');
const skillController = require('../controllers/skill.controller');
const skillCategoryController = require('../controllers/skillCategory.controller');

const router = Router();

router.post('/category', skillCategoryController.create);
router.post('/', skillController.create);
router.get('/category', skillCategoryController.read);
router.get('/', skillController.read);

module.exports = router;
