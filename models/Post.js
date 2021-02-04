const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    content: {
        type: String,
        required: true,
    },
    thread_id: {
        type: Schema.Types.ObjectId,
        ref: 'Forum',
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    upvotes: {
        type: Number,
    },
    downvotes: {
        type: Number,
    },
});

const Post = mongoose.model('posts', PostSchema);

module.exports = Post;
