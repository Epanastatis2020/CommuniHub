const express = require('express');
const router = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

// Load Thread model
const Thread = require('../../models/Thread');
router.use(cors());

router.post('/api/thread', (req, res) => {
    // var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY);
    // const currentUserId = User.findOne({
    //     _id: decoded._id,
    // });

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

router.get('/api/thread/:threadId', (req, res) => {
    Thread.findOne({
        _id: req.params.threadId,
    })
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

module.exports = router;
