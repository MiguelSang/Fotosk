const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');

// Registro de usuario
exports.register = async (req, res) => {
    try {
        const { nombre, email, password, rol } = req.body;

        // Verificar si el usuario ya existe
        const existingUser = await Usuario.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'El usuario ya está registrado' });
        }

        // Encriptar la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crear un nuevo usuario
        const newUser = new Usuario({
            nombre,
            email,
            password: hashedPassword,
            rol: rol || 'usuario', // Por defecto, asignar rol de "usuario"
        });

        await newUser.save();
        res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (error) {
        // Manejar el error de duplicación de clave
        if (error.code === 11000) {
            return res.status(400).json({ message: 'El correo ya está registrado' });
        }
        console.error("Error en el registro:", error.message);
        res.status(500).json({ message: error.message });
    }
};

// Inicio de sesión
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Verificar si el usuario existe
        const user = await Usuario.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Usuario no encontrado' });
        }

        // Comparar la contraseña
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Contraseña incorrecta' });
        }

        // Generar el token JWT
        const token = jwt.sign(
            { id: user._id, rol: user.rol }, // Incluye el rol en el token
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        // Enviar el token, el nombre del usuario y el rol
        res.json({ token, nombre: user.nombre, rol: user.rol });
    } catch (error) {
        console.error("Error en el inicio de sesión:", error.message);
        res.status(500).json({ message: error.message });
    }
};

// Actualizar un usuario
exports.actualizarUsuario = async (req, res) => {
    try {
        const usuarioActualizado = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!usuarioActualizado) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        res.json(usuarioActualizado);
    } catch (error) {
        console.error("Error al actualizar usuario:", error.message);
        res.status(500).json({ message: error.message });
    }
};

// Eliminar un usuario
exports.eliminarUsuario = async (req, res) => {
    try {
        const usuarioEliminado = await Usuario.findByIdAndDelete(req.params.id);

        if (!usuarioEliminado) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        res.json({ message: 'Usuario eliminado' });
    } catch (error) {
        console.error("Error al eliminar usuario:", error.message);
        res.status(500).json({ message: error.message });
    }
};
