require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');

const app = express();

// Conectar a la base de datos
connectDB();

// Middleware para habilitar CORS y parsear el cuerpo de la solicitud como JSON
app.use(cors());
app.use(express.json());

// Rutas de la API
app.use('/api/auth', require('./routes/authRoutes'));  // Ruta para autenticación
app.use('/api/retos', require('./routes/retosRoutes'));  // Ruta para los retos
app.use('/api/publicaciones', require('./routes/publicacionesRoutes'));  // Ruta para las publicaciones
app.use('/api/estadisticas', require('./routes/estadisticasRoutes'));  // Ruta para las estadísticas

// Puerto del servidor
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

