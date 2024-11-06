const Estadistica = require('../models/Estadistica');

// Crear o actualizar estadísticas de un usuario
exports.actualizarEstadistica = async (req, res) => {
    try {
        const { usuario, likesRecibidos } = req.body;
        const estadistica = await Estadistica.findOneAndUpdate(
            { usuario },
            { $inc: { likesRecibidos, publicacionesCreadas: 1 } },
            { new: true, upsert: true }
        );
        res.json(estadistica);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener estadísticas
exports.obtenerEstadisticas = async (req, res) => {
    try {
        const estadisticas = await Estadistica.find();
        res.json(estadisticas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
