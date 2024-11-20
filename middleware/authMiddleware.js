const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'No token, autorización denegada.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Guarda el ID y el rol del usuario en req.user
        next();
    } catch (err) {
        res.status(401).json({ message: 'Token inválido.' });
    }
};
