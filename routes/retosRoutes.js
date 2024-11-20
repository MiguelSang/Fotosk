const express = require('express');
const router = express.Router();
const retosController = require('../controllers/retosController');

// Crear un reto
router.post('/', retosController.crearReto);

// Obtener todos los retos
router.get('/', retosController.obtenerRetos);

// Actualizar un reto
router.put('/:id', retosController.actualizarReto);

// Eliminar un reto
router.delete('/:id', retosController.eliminarReto);

// Subir foto para participar en un reto
router.post('/subir-foto', retosController.subirFotoReto);

module.exports = router;
