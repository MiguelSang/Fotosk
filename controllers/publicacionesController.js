const Publicacion = require('../models/Publicacion');

// Crear una nueva publicación
exports.crearPublicacion = async (req, res) => {
    try {
        const nuevaPublicacion = new Publicacion(req.body);
        const publicacionGuardada = await nuevaPublicacion.save();
        res.status(201).json(publicacionGuardada);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener todas las publicaciones
exports.obtenerPublicaciones = async (req, res) => {
    try {
        const publicaciones = await Publicacion.find().populate('retoId');
        res.json(publicaciones);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar una publicación
exports.actualizarPublicacion = async (req, res) => {
    try {
        const publicacionActualizada = await Publicacion.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(publicacionActualizada);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Eliminar una publicación
exports.eliminarPublicacion = async (req, res) => {
    try {
        await Publicacion.findByIdAndDelete(req.params.id);
        res.json({ mensaje: 'Publicación eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
