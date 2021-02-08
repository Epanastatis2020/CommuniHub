import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Create Schema
const ForumSchema = new Schema({
    forum_name: {
        type: String,
        required: true,
    },
});

const Forum = mongoose.model('forums', ForumSchema);

export default Forum;
