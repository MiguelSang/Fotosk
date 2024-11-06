const express = require('express');
const router = express.Router();
const retosController = require('../controllers/retosController');

router.post('/', retosController.crearReto);
router.get('/', retosController.obtenerRetos);
router.put('/:id', retosController.actualizarReto);
router.delete('/:id', retosController.eliminarReto);

module.exports = router;
