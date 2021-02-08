import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ThreadSchema = new Schema(
    {
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
        default: false,
    },
    forum_id: {
        type: Schema.Types.ObjectId,
        ref: 'Forum',
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    },
    { timestamps: true }
);

const Thread = mongoose.model('threads', ThreadSchema);

export default Thread;
