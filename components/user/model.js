const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String, 
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;