const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

// Load Post model
const Post = require('../../models/Post');
router.use(cors());

router.post('/api/post', (req, res) => {});

router.get('/api/post', (req, res) => {});

router.get('/api/post/:postId', (req, res) => {});

router.put('/api/post/:postId', (req, res) => {});

router.delete('/api/post/:postId', (req, res) => {});

module.exports = router;
