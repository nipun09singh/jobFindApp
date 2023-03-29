const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Register user
router.post('/register', userController.registerUser);

// Login user
router.post('/login', userController.loginUser);

// Update user profile
router.put('/profile/:userId', userController.updateUserProfile);

// Get user profile
router.get('/profile/:userId', userController.getUserProfile);

module.exports = router;
