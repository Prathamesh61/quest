const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Can't be blank"]
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: [true, "Can't be blank"],
        index: true,
    },
    user_id: {
        type: String,
        required: [true, "Can't be blank"]
    },
    username: {
        type: String
    }
}, { timestamps: true })


const UserModel = mongoose.model('User', UserSchema);

module.exports = { UserModel }