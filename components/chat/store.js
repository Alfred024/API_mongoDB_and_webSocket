//Mongoose Model
const Model = require('./model');

function addChat_toStorage(chat) {
    const mychat = new Model(chat);
    return mychat.save();
}

async function getChats_fromStorage() {
    return new Promise((resolve, reject) =>{
        const chats = Model.find()
            .populate('users')
            .exec();
        if(!chats){
            reject('No se han obtenido los mensajes correctamente');
            return false;
        }
        resolve(chats);
    });
}

async function deleteChat_ofStorage(id) {
    const chatToDelete = await Model.findByIdAndDelete(id);
    return chatToDelete;
}



module.exports = {
    add: addChat_toStorage,
    getChats: getChats_fromStorage,
    delete: deleteChat_ofStorage,
};