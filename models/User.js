import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
        },
        email: {
            type: String,
            trim: true,
            required: true,
            unique: true,
        },
        is_admin: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

const User = mongoose.model('User', UserSchema);

export default User;
