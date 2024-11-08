const Estadistica = require('../models/Estadistica');  // Modelo de estadísticas

// Crear o actualizar estadísticas de un usuario
exports.actualizarEstadistica = async (req, res) => {
    try {
        const { usuario, likesRecibidos } = req.body;

        // Buscar y actualizar las estadísticas del usuario
        const estadistica = await Estadistica.findOneAndUpdate(
            { usuario },  // Buscar por ID de usuario
            { 
                $inc: { likesRecibidos, publicacionesCreadas: 1 },  // Incrementar likes y publicaciones
            },
            { 
                new: true,  // Devuelve el documento actualizado
                upsert: true  // Si no se encuentra, crea una nueva entrada
            }
        );

        // Devuelve la estadística actualizada o creada
        res.status(200).json(estadistica);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener estadísticas de todos los usuarios
exports.obtenerEstadisticas = async (req, res) => {
    try {
        const estadisticas = await Estadistica.find();
        res.json(estadisticas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
