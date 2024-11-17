const express = require('express');
const router = express.Router();
const estadisticasController = require('../controllers/estadisticasController');

// Ruta para crear o actualizar estadísticas
router.post('/', estadisticasController.actualizarEstadistica);

// Ruta para obtener todas las estadísticas
router.get('/', estadisticasController.obtenerEstadisticas);

// Ruta para actualizar estadísticas (si es necesario tener una ruta PUT separada)
router.put('/:id', estadisticasController.actualizarEstadistica);

module.exports = router;
