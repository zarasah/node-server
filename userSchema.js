const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema ({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20,
    },

    age: {
        type: Number,
    },

    gender: {
        type: String,
        default: null,
    },

    created: {
        type: Date,
        default: Date.now,
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;