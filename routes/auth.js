const express = require('express');
const router = express.Router();
const pool = require('../db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {
    try {
        const { username, password, mobile_number } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await pool.query(
            'INSERT INTO users (username, password, mobile_number) VALUES ($1, $2, $3) RETURNING *',
            [username, hashedPassword, mobile_number]
        );

        const token = jwt.sign({ userId: newUser.rows[0].id }, 'your_secret_key');
        res.json({ token });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
