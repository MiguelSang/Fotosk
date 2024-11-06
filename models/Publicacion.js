const mongoose = require('mongoose');

const PublicacionSchema = new mongoose.Schema({
    usuario: { type: String, required: true },
    retoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Reto', required: true },
    imagenUrl: { type: String, required: true },
    descripcion: { type: String },
    fecha: { type: Date, default: Date.now },
    likes: { type: Number, default: 0 }
});

module.exports = mongoose.model('Publicacion', PublicacionSchema);
