const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        minlength: [3, 'El nombre debe tener al menos 3 caracteres'],
    },
    email: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true,
        match: [/.+\@.+\..+/, 'Por favor, ingresa un correo válido'],
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria'],
        minlength: [6, 'La contraseña debe tener al menos 6 caracteres'],
    },
    rol: {
        type: String,
        enum: ['usuario', 'admin'],
        default: 'usuario',
    },
    estado: {
        type: Boolean,
        default: true, // El usuario está activo por defecto
    },
    fechaCreacion: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true }); // Habilita createdAt y updatedAt automáticamente

module.exports = mongoose.model('Usuario', usuarioSchema);
