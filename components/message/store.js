//Mongoose Model
const Model = require('./model');

async function addMessage_toStorage(message) {
    const myMessage = await new Model(message);
    myMessage.save();
}

async function getMessages_fromStorage() {
    return new Promise((resolve, reject) =>{
        const messages = Model.find();
        if(!messages){
            reject('No se han obtenido los mensajes correctamente');
            return false;
        }
        resolve(messages);
    });
}

async function getMessagesByChatId_fromStorage(chatId) {
    return new Promise((resolve, reject) =>{
        const messages = Model.find({ chat: chatId });
        if(!messages){
            reject('No se han obtenido los mensajes correctamente');
            return false;
        }
        resolve(messages);
    });
}

async function getMessagesByUserId_fromStorage(userId) {
    return new Promise((resolve, reject) =>{
        const messages = Model.find({ user: userId });
        if(!messages){
            reject('No se han obtenido los mensajes correctamente');
            return false;
        }
        resolve(messages);
    });
}

async function patchMessage_ofStorage(id, messageText) {
    const messageById = await Model.findById(id);
    messageById.message = messageText;
    const newMessage = await messageById.save();
    return newMessage;
}

async function deleteMessage_ofStorage(id) {
    const messageToDelete = await Model.findByIdAndDelete(id);;
    console.log(messageToDelete);
    
    //Model.deleteOne({_id: id});
    return messageToDelete;
}

module.exports = {
    add: addMessage_toStorage,
    getList: getMessages_fromStorage,
    getList_ByChatId: getMessagesByChatId_fromStorage,
    getList_ByUserId: getMessagesByUserId_fromStorage,
    patch: patchMessage_ofStorage,
    delete: deleteMessage_ofStorage,
};