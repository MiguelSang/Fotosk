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
const multer = require('multer');
const path = require('path');

// Configuración de multer para subir archivos
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads'); // Carpeta donde se guardarán las fotos
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

// Filtro para permitir solo imágenes
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    } else {
        cb(new Error('Solo se permiten archivos de imagen'), false);
    }
};

const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // Tamaño máximo: 5 MB
    fileFilter: fileFilter,
});

// Endpoint para subir una foto al participar en un reto
exports.subirFotoReto = [
    upload.single('foto'), // El campo del formulario debe llamarse "foto"
    async (req, res) => {
        try {
            if (!req.file) {
                return res.status(400).json({ message: 'No se subió ninguna foto' });
            }

            const { retoId, userId } = req.body; // ID del reto y usuario

            // Aquí podrías asociar la foto con el reto y usuario en la base de datos
            res.status(200).json({
                message: 'Foto subida exitosamente',
                filePath: req.file.path,
            });
        } catch (error) {
            res.status(500).json({ message: 'Error al subir la foto', error: error.message });
        }
    },
];
