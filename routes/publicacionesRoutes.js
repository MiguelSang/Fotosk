const express = require('express');
const router = express.Router();
const publicacionesController = require('../controllers/publicacionesController');
const authMiddleware = require('../middleware/authMiddleware'); // Agregar el middleware de autenticación

// Ruta para crear una publicación (requiere autenticación)
router.post('/', authMiddleware, publicacionesController.crearPublicacion);

// Ruta para obtener todas las publicaciones (pública)
router.get('/', publicacionesController.obtenerPublicaciones);

// Ruta para actualizar una publicación (requiere autenticación)
router.put('/:id', authMiddleware, publicacionesController.actualizarPublicacion);

// Ruta para eliminar una publicación (requiere autenticación)
router.delete('/:id', authMiddleware, publicacionesController.eliminarPublicacion);

module.exports = router;
