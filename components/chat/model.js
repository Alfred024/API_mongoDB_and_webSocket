const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatSchema = mongoose.Schema({
    chat: String,
    users: [
        {
            type: Schema.ObjectId, 
            ref: 'User',
            require: true
        }
    ],
    //Es buena idea que guarde sólo el ID del mensaje, o que guarde todo el mensaje sería mejor
    messages: [
        {
            type: Schema.ObjectId, 
            ref: 'Message',
        } 
    ]
});

const chatModel = mongoose.model('Chat', chatSchema);

module.exports = chatModel;