// Example route for creating a user
const express = require('express');
const router = express.Router();
const http = require('http');
const User = require('../models/User');
const bcrypt = require('bcrypt');

// POST /api/register
router.post('/register', async (req, res) => {
    console.log("Request received...!");
    try {
        const { user_email, password } = req.body;
        // Check if the user with the same email already exists
        const existingUser = await User.findOne({ user_email });

        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({
            user_email,
            password: hashedPassword
        });

        // Save the user to the database
        const savedUser = await newUser.save();
        
        res.status(201).json({ message: 'success'});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;