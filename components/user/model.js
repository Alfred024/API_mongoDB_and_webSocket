const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    name: String, 
});

const messageModel = mongoose.model('User', messageSchema);

module.exports = messageModel;