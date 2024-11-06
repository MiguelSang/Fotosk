const express = require('express');
const router = express.Router();
const publicacionesController = require('../controllers/publicacionesController');

router.post('/', publicacionesController.crearPublicacion);
router.get('/', publicacionesController.obtenerPublicaciones);
router.put('/:id', publicacionesController.actualizarPublicacion);
router.delete('/:id', publicacionesController.eliminarPublicacion);

module.exports = router;
