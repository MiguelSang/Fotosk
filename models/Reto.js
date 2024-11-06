const mongoose = require('mongoose');

const RetoSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descripcion: { type: String, required: true },
    fecha: { type: Date, default: Date.now },
    activo: { type: Boolean, default: true }
});

module.exports = mongoose.model('Reto', RetoSchema);
