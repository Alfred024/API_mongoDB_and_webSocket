const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Usuario tiene un nombre
const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    }, 
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;