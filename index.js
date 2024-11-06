require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/retos', require('./routes/retosRoutes'));
app.use('/api/publicaciones', require('./routes/publicacionesRoutes'));
app.use('/api/estadisticas', require('./routes/estadisticasRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
