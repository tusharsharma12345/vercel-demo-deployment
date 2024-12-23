const express = require('express');
const { getAllUsers, addUser } = require('../controllers/userController');

const router = express.Router();

// Routes
router.get('/', getAllUsers);
router.post('/', addUser);

module.exports = router;
