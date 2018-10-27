const express = require('express');
const router = express.Router();

const pointController = require('../controllers/point.controller');

//Testing Communications
router.get('/test', pointController.test);
//Create Point
router.post('/create', pointController.pointCreate);
//Read Single Point
router.get('/:id', pointController.readPoint);
//Read All Points
router.get('readAll', pointController.readAllPoints)
//Update Point
router.put('/:id/update', pointController.updatePoint);
router.delete('/:id/delete', pointController.deletePoint)

module.exports = router;