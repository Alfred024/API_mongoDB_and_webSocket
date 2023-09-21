const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = mongoose.Schema({
    user: {
        type: Schema.ObjectId, 
        ref: 'User',
        require: true,
    }, 
    chat: {
        type: Schema.ObjectId,
        ref: 'Chat',
        require: true,
    },
    message: {
        type: String,
        require: true,
    },
    //file: String,
    date: Date,
});

const messageModel = mongoose.model('Message', messageSchema);

module.exports = messageModel;