const express = require('express');
const router = express.Router();

const pointController = require('../controllers/point.controller');

//Testing Communications
router.get('/test', pointController.test);
//Create Point
router.post('/create', pointController.pointCreate);

module.exports = router;