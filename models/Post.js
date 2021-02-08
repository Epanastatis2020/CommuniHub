import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    content: {
        type: String,
        required: true,
    },
    thread_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Forum',
    },
    user_id: {
        type: Schema.Types.ObjectId,
        required: true,
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

export default Post;
