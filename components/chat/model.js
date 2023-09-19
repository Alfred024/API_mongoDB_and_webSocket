const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatSchema = mongoose.Schema({
    users: [
        {
            type: Schema.ObjectId, 
            ref: 'User',
        }
    ],
    chat: {
        type: String,
        require: true,
    },
    messages: [
        {
            type: Schema.ObjectId, 
            ref: 'Message',
        } 
    ]
});

const chatModel = mongoose.model('Chat', chatSchema);

module.exports = chatModel;