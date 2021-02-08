import { currentUser, privateRoute } from '../controllers/auth.js';
import { findOrCreateUser } from '../middleware/index.js';
import path from 'path';
import express from 'express';
const router = express.Router();
import apiForumRoutes from './api/forum-routes.js';
import apiThreadRoutes from './api/thread-routes.js';
import apiPostRoutes from './api/post-routes.js';

// API Routes
router.post('/current-user', findOrCreateUser, currentUser);
router.get('/private-route', findOrCreateUser, privateRoute);
router.use(apiForumRoutes);
router.use(apiThreadRoutes);
router.use(apiPostRoutes);

// If no API routes are hit, send the React app
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

export default router;
