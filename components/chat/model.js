const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Un chat va a tener usuarios
const chatSchema = mongoose.Schema({
    chat: String,
    users: [
        {
            type: Schema.ObjectId, 
            ref: 'User',
            require: true
        }
    ],
});

const chatModel = mongoose.model('Chat', chatSchema);

module.exports = chatModel;