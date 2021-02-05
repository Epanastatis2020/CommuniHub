const path = require('path');
const router = require('express').Router();
const apiUserRoutes = require('./api/user-routes');
const apiForumRoutes = require('./api/forum-routes');
const apiThreadRoutes = require('./api/thread-routes');
const apiPostRoutes = require('./api/post-routes');

// API Routes
router.use(apiUserRoutes);
router.use(apiForumRoutes);
router.use(apiThreadRoutes);
router.use(apiPostRoutes);

// If no API routes are hit, send the React app
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;
