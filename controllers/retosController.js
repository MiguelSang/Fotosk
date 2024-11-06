const Reto = require('../models/Reto');

// Crear un nuevo reto
exports.crearReto = async (req, res) => {
    try {
        const nuevoReto = new Reto(req.body);
        const retoGuardado = await nuevoReto.save();
        res.status(201).json(retoGuardado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener todos los retos
exports.obtenerRetos = async (req, res) => {
    try {
        const retos = await Reto.find();
        res.json(retos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar un reto
exports.actualizarReto = async (req, res) => {
    try {
        const retoActualizado = await Reto.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(retoActualizado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Eliminar un reto
exports.eliminarReto = async (req, res) => {
    try {
        await Reto.findByIdAndDelete(req.params.id);
        res.json({ mensaje: 'Reto eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
