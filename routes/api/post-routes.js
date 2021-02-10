import express from 'express';
const router = express.Router();
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

// Load Post model
import Post from '../../models/Post.js';
router.use(cors());


// Create a post
router.post('/api/post', (req, res) => {

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

// Get all posts
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

//Get all posts from a specific thread/topic
router.get('/api/posts/:threadId', (req, res) => {
    Post.find({
        thread_id: req.params.threadId,
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

//Get a specific post
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

//Update a post
router.put('/api/post/:id', (req, res) => {
    const postData = {
        content: req.body.content,
        thread_id: req.body.thread_id,
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

//Delete a post
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

export default router;
