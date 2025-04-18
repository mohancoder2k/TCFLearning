const express = require('express');
const { register, login } = require('../controller/authController'); // Ensure this path is correct

const router = express.Router();

// Public Routes
router.post('/register', register);
router.post('/login', login);

module.exports = router;
