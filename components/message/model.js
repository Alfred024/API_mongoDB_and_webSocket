const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = mongoose.Schema({
    user: {
        type: Schema.ObjectId, 
        ref: 'User',
    }, 
    chat: {
        type: Schema.ObjectId,
        ref: 'Chat',
    },
    message: {
        type: String,
        require: true,
    },
    file: String,
    date: Date,
});

const messageModel = mongoose.model('Message', messageSchema);

module.exports = messageModel;