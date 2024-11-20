module.exports = (rolesPermitidos) => {
    return (req, res, next) => {
        const userRole = req.user?.rol;

        if (!rolesPermitidos.includes(userRole)) {
            return res.status(403).json({ message: 'Acceso denegado: No tienes permisos para realizar esta acción.' });
        }

        next();
    };
};
