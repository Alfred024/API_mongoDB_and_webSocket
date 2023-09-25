//Mongoose Model
const Model = require('./model');

function addChat_toStorage(chat) {
    console.log("Guardando chat...");
    const mychat = new Model(chat);
    return mychat.save();
}

async function getChats_fromStorage(chatId) {
    return new Promise((resolve, reject) =>{
        let chats;
        if(chatId){
            console.log("Sí se pasó un id");
            chats = Model.findById(chatId)
            .populate('users')
            .exec();
        }else{
            console.log("Noo se pasó un id");
            chats = Model.find()
            .populate('users')
            .exec();
        }
        
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