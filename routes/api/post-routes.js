const express = require('express');
const router = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

// Load Post model
const Post = require('../../models/Post');
router.use(cors());

router.post('/api/post', (req, res) => {
    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY);
    const currentUserId = User.findOne({
        _id: decoded._id,
    });

    const postData = {
        content: req.body.content,
        thread_id: req.body.thread_id,
        // user_id: currentUserId,
        user_id: req.body.user_id,
        upvotes: 0,
        downvotes: 0,
    };

    Post.create(postData)
        .then((postInfo) => {
            res.json(postInfo);
        })
        .catch((err) => {
            console.log(err);
        });
});

router.get('/api/post', (req, res) => {
    Post.find()
        .then((response) => {
            if (response) {
                res.json(response);
            } else {
                res.status(400).json({ error: 'No posts currently exist' });
            }
        })
        .catch((err) => {
            res.send('error: ' + err);
        });
});

router.get('/api/post/:postId', (req, res) => {
    Post.findOne({
        _id: req.params.postId,
    })
        .then((response) => {
            if (response) {
                res.json(response);
            } else {
                res.status(400).json({ error: 'post does not exist' });
            }
        })
        .catch((err) => {
            res.send('error: ' + err);
        });
});

router.put('/api/post/:id', (req, res) => {
    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY);
    const currentUserId = User.findOne({
        _id: decoded._id,
    });
    const postData = {
        content: req.body.content,
        thread_id: req.body.thread_id,
        // user_id: currentUserId,
        user_id: req.body.user_id,
        upvotes: req.body.upvotes,
        downvotes: req.body.downvotes,
    };

    Post.findOneAndUpdate({ _id: req.params.id }, postData, { new: true, upsert: true })
        .then((response) => {
            console.log(postData);
            console.log('success');
            res.json(response);
        })
        .catch((err) => {
            res.send('error: ' + err);
        });
});

router.delete('/api/post/:postId', (req, res) => {
    Post.findByIdAndDelete(req.params.postId)
        .then((response) => {
            if (response) {
                res.json(response);
            } else {
                res.status(400).json({ error: 'That post does not exist' });
            }
        })
        .catch((err) => {
            res.send('error: ' + err);
        });
});

module.exports = router;
