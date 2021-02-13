import express from 'express';
const router = express.Router();
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

// Load User model

import User from '../../models/User.js';

router.use(cors());

router.get('/api/user/:userId', (req, res) => {
    User.findById({
        _id: req.params.userId,
    })
        .then((response) => {
            if (response) {
                res.json(response);
            } else {
                res.status(400).json({ error: 'User does not exist' });
            }
        })
        .catch((err) => {
            res.send('error: ' + err);
        });
});

export default router;