const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware'); // Middleware para proteger rutas

// Ruta para registrar un usuario
router.post('/register', authController.register);

// Ruta para iniciar sesión
router.post('/login', authController.login);

// Ruta para actualizar un usuario (requiere autenticación)
router.put('/:id', authMiddleware, authController.actualizarUsuario);

// Ruta para eliminar un usuario (requiere autenticación)
router.delete('/:id', authMiddleware, authController.eliminarUsuario);

module.exports = router;
