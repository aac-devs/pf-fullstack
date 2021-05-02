const { Router } = require('express');
const profileController = require('../controllers/profile.controller');

const router = Router();

router.post('/', profileController.create);
router.get('/', profileController.read);

module.exports = router;
