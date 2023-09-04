const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    user: String, 
    message: {
        type: String,
        require: true,
    },
    date: Date,
});

const messageModel = mongoose.model('Message', messageSchema);

module.exports = messageModel;