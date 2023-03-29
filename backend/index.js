const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const app = express();
const PORT = process.env.PORT || 5000;

// Replace with your actual MongoDB connection string
const MONGODB_URI = 'mongodb+srv://nipun0905:Nipun_2001@vartaai.ltxtuio.mongodb.net/?retryWrites=true&w=majority';

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Job Portal API');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
