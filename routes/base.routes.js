const express = require('express');
const router = express.Router();

const { loginCtrl, registerCtrl } = require('../controllers/auth.controller');

// Auth Specific Routes
router.get('/login', loginCtrl);
router.post('/register', registerCtrl);

module.exports = router;
