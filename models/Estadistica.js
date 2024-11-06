const mongoose = require('mongoose');

const EstadisticaSchema = new mongoose.Schema({
    usuario: { type: String, required: true },
    retosParticipados: { type: Number, default: 0 },
    publicacionesCreadas: { type: Number, default: 0 },
    likesRecibidos: { type: Number, default: 0 }
});

module.exports = mongoose.model('Estadistica', EstadisticaSchema);
