const { Router } = require('express');
const portfolioControllers = require('../controllers/portfolio.controllers');

const router = Router();

router.post('/', portfolioControllers.texts);

module.exports = router;
