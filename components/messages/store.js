//Mongoose Model
const Model = require('./model');

//Variables de entorno
const {config} = require('../../config/config');
const USER = encodeURIComponent(config.db_user);
const PASSWORD = encodeURIComponent(config.db_password);
const DB_NAME = encodeURIComponent(config.db_name);
const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.db_host}/${DB_NAME}?retryWrites=true&w=majority`;

const db = require('mongoose');

db.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: DB_NAME,
});

console.log('Conexión a MongoDB exitosa');

function addMessage_toStorage(message) {
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessages_fromStorage() {
    const messages = await Model.find();
    return messages;
}

async function patchMessage_ofStorage(id, messageText) {
    const messageById = await Model.findById(id);
    messageById.message = messageText;
    const newMessage = await messageById.save();
    return newMessage;
}

module.exports = {
    add: addMessage_toStorage,
    getList: getMessages_fromStorage,
    patch: patchMessage_ofStorage,
};