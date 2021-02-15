import { currentUser, privateRoute } from '../controllers/auth.js';
import { findOrCreateUser } from '../middleware/index.js';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import apiForumRoutes from './api/forum-routes.js';
import apiThreadRoutes from './api/thread-routes.js';
import apiPostRoutes from './api/post-routes.js';
import apiUserRoutes from './api/user-routes.js';
const router = express.Router();
const __dirname = dirname(fileURLToPath(import.meta.url));

// API Routes
router.post('/api/current-user', findOrCreateUser, currentUser);
router.get('/api/private-route', findOrCreateUser, privateRoute);
router.use(apiForumRoutes);
router.use(apiThreadRoutes);
router.use(apiPostRoutes);
router.use(apiUserRoutes);

// If no API routes are hit, send the React app
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

export default router;
