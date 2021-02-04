const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

// Load Thread model
const Thread = require('../../models/Thread');
router.use(cors());

router.post('/api/thread', (req, res) => {});

router.get('/api/thread', (req, res) => {});

router.get('/api/thread/:threadId', (req, res) => {});

router.put('/api/thread/:threadId', (req, res) => {});

router.delete('/api/thread/:threadId', (req, res) => {});

module.exports = router;
