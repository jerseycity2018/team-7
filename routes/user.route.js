const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

//Testing Communications
router.get('/test', userController.test);

module.exports = router;