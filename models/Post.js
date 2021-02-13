import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const PostSchema = new Schema(
    {
    content: {
        type: String,
        required: true,
    },
    thread_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Thread',
    },
    user_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    upvotes: {
        type: Number,
        default: 0
    },
    downvotes: {
        type: Number,
        default: 0
    },
    },
    { timestamps: true }
);

const Post = mongoose.model('posts', PostSchema);

export default Post;
