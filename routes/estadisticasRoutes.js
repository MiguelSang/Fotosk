const express = require('express');
const router = express.Router();
const estadisticasController = require('../controllers/estadisticasController');

router.post('/', estadisticasController.actualizarEstadistica);
router.get('/', estadisticasController.obtenerEstadisticas);

module.exports = router;
