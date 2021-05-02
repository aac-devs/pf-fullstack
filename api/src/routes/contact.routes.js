const { Router } = require('express');
const contactController = require('../controllers/contact.controller');

const router = Router();

router.post('/', contactController.create);
router.get('/', contactController.read);

module.exports = router;
