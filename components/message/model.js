const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Los mensajes tienen un chat y un usario 
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