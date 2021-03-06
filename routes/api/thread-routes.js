import express from 'express';
const router = express.Router();
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

// Load Thread model
import Thread from '../../models/Thread.js';
router.use(cors());


// Create a thread/topic
router.post('/api/thread', (req, res) => {

    const threadData = {
        title: req.body.title,
        content: req.body.content,
        forum_id: req.body.forum_id,
        // user_id: currentUserId,
        user_id: req.body.user_id,
    };

    Thread.create(threadData)
        .then((threadInfo) => {
            res.json(threadInfo);
        })
        .catch((err) => {
            console.log(err);
        });
});

//Get all threads/topics
router.get('/api/thread', (req, res) => {
    Thread.find()
        .then((response) => {
            if (response) {
                res.json(response);
            } else {
                res.status(400).json({ error: 'No threads currently exist' });
            }
        })
        .catch((err) => {
            res.send('error: ' + err);
        });
});

//Get a specific thread/topic
router.get('/api/thread/:threadId', (req, res) => {
    Thread.findOne({
        _id: req.params.threadId,
    })
        .populate('user_id')
        .then((response) => {
            if (response) {
                res.json(response);
            } else {
                res.status(400).json({ error: 'thread does not exist' });
            }
        })
        .catch((err) => {
            res.send('error: ' + err);
        });
});

//Update a thread/topic
router.put('/api/thread/:id', (req, res) => {
    const threadData = {
        title: req.body.title,
        content: req.body.content,
        forum_id: req.body.forum_id,
        is_sticky: req.body.is_sticky,
    };

    Thread.findOneAndUpdate({ _id: req.params.id }, threadData, { new: true, upsert: true })
        .then((response) => {
            console.log(threadData);
            console.log('success');
            res.json(response);
        })
        .catch((err) => {
            res.send('error: ' + err);
        });
});

//Delete a thread/topic
router.delete('/api/thread/:threadId', (req, res) => {
    Thread.findByIdAndDelete(req.params.threadId)
        .then((response) => {
            if (response) {
                res.json(response);
            } else {
                res.status(400).json({ error: 'That thread does not exist' });
            }
        })
        .catch((err) => {
            res.send('error: ' + err);
        });
});

export default router;
