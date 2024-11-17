require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ MongoDB Atlas connected successfully");
    } catch (error) {
        console.error("❌ MongoDB connection error:", error.message);
        process.exit(1);
    }
};

// Verifica que la variable MONGO_URI esté configurada correctamente
console.log("📌 Connecting to MongoDB with URI:", process.env.MONGO_URI);

module.exports = connectDB;
