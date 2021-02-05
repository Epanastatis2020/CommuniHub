const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ThreadSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    isSticky: {
        type: Boolean,
    },
    forum_id: {
        type: Schema.Types.ObjectId,
        ref: 'Forum',
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
});

const Thread = mongoose.model('threads', ThreadSchema);

module.exports = Thread;
