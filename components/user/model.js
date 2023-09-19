const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
    name: String, 
    chats: [
        {
            type: Schema.ObjectId, 
            ref: 'Chat',
        }
    ]
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;