const express = require('express');
const router = express.Router();
const retosController = require('../controllers/retosController');
const authMiddleware = require('../middleware/authMiddleware');

// Ruta para crear un reto (requiere autenticación)
router.post('/', authMiddleware, retosController.crearReto);

// Ruta para obtener todos los retos (pública)
router.get('/', retosController.obtenerRetos);

// Ruta para actualizar un reto (requiere autenticación)
router.put('/:id', authMiddleware, retosController.actualizarReto);

// Ruta para eliminar un reto (requiere autenticación)
router.delete('/:id', authMiddleware, retosController.eliminarReto);

module.exports = router;
