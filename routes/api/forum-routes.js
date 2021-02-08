import express from 'express';
const router = express.Router();
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

// Load Forum model

import Forum from '../../models/Forum.js';

router.use(cors());

router.post('/api/forum', (req, res) => {
    const forumData = {
        forum_name: req.body.forum_name,
    };

    Forum.create(forumData)
        .then((forumInfo) => {
            res.json(forumInfo);
        })
        .catch((err) => {
            console.log(err);
        });
});

router.get('/api/forum', (req, res) => {
    Forum.find()
        .then((response) => {
            if (response) {
                res.json(response);
            } else {
                res.status(400).json({ error: 'No forums currently exist' });
            }
        })
        .catch((err) => {
            res.send('error: ' + err);
        });
});

router.get('/api/forum/:forumId', (req, res) => {
    Forum.findOne({
        _id: req.params.forumId,
    })
        .then((response) => {
            if (response) {
                res.json(response);
            } else {
                res.status(400).json({ error: 'Forum does not exist' });
            }
        })
        .catch((err) => {
            res.send('error: ' + err);
        });
});

router.put('/api/forum/:id', (req, res) => {
    const forumData = {
        forum_name: req.body.forum_name,
    };

    Forum.findOneAndUpdate({ _id: req.params.id }, forumData, { new: true, upsert: true })
        .then((response) => {
            console.log(forumData);
            console.log('success');
            res.json(response);
        })
        .catch((err) => {
            res.send('error: ' + err);
        });
});

router.delete('/api/forum/:forumId', (req, res) => {
    Forum.findByIdAndDelete(req.params.forumId)
        .then((response) => {
            if (response) {
                res.json(response);
            } else {
                res.status(400).json({ error: 'That forum does not exist' });
            }
        })
        .catch((err) => {
            res.send('error: ' + err);
        });
});

export default router;
