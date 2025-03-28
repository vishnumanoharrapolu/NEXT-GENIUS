// models/User.js
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name']
    },
    role: {
        type: String,
        enum: ['student', 'administrator', 'teacher'],
        default: 'student',
        required: [true, 'Please provide a role']   
    },
    password: {
        type: String,
        required: [true, 'Please provide a password']
    },
    email: {
        type: String,
        required: [true, 'Please provide an email'],
        unique: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);