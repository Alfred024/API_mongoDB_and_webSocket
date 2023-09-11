const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = mongoose.Schema({
    user: {
        type: Schema.ObjectId, 
        ref: 'User',
    }, 
    message: {
        type: String,
        require: true,
    },
    date: Date,
});

const messageModel = mongoose.model('Message', messageSchema);

module.exports = messageModel;