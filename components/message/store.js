//Mongoose Model
const Model = require('./model');
//Para agregar a el chat con el X id el mensaje correspondiente
const ChatModel = require('../chat/model');

async function addMessage_toStorage(message, chatID) {
    //console.log('ID DEL CHAT: '+message.chat);
    const myMessage = await new Model(message);
    myMessage.save();

    //El mensaje también debemos guardarlo en el array de mensajes del chat correspondiente
    const chat = await ChatModel.findById(chatID);
    chat.messages.push(myMessage);
    chat.save();
}

async function getMessages_fromStorage(filterUser) {
    return new Promise((resolve, reject) =>{
        let filter = {};
        if (filterUser){
            filter = {user: filterUser}
        }
        const messages = Model.find(filter)
            .populate('user')
            .exec();
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
    patch: patchMessage_ofStorage,
    delete: deleteMessage_ofStorage,
};