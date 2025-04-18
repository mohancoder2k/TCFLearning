const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// 1) Middlewares
app.use(cors()); // <-- add parentheses
app.use(express.json());

// 2) Routes 
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

// 3) MongoDB Connection
mongoose.connect('mongodb://localhost:27017/learning_auth', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('MongoDB connection successful');
})
.catch((error) => {
    console.error('MongoDB connection failed:', error);
});

// 4) Global Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

// 5) Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
