//Mongoose Model
const Model = require('./model');

function addMessage_toStorage(message) {
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessages_fromStorage(filterUser) {
    let filter = {};
    if (filterUser){
        filter = {user: filterUser}
    }
    const messages = await Model.find(filter);
    return messages;
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