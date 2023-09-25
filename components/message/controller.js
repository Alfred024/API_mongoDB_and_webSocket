const store = require('./store');
const socket = require('../../socket').socket;

function getMessages() {
  return new Promise((resolve, reject)=>{
    if(store.getList()){
      resolve(store.getList());
    }else{
      reject('No fue posible obtener los mensajes');
    }
  });
}

function getMessagesByChatId(chatId) {
  return new Promise((resolve, reject)=>{
    if(store.getList_ByChatId(chatId)){
      resolve(store.getList_ByChatId(chatId));
    }else{
      reject(`No se encontró el chat con el id ${chatId}`);
    }
  });
}

function getMessagesByUserId(userId) {
  return new Promise((resolve, reject)=>{
    if(store.getList_ByChatId(userId)){
      resolve(store.getList_ByChatId(userId));
    }else{
      reject(`No se encontró el chat con el id ${userId}`);
    }
  });
}

function addMessage(body) {
  return new Promise((resolve, reject) =>{
    if( !body.userId || !body.chatId || !body.message){
      console.log('origen: addMessage \nNo se pasó el usuaroi o mensaje');
      reject('Datos incorrectos');
    }

    const fullMessage = {
      user: body.userId,
      chat: body.chatId,
      message: body.message,
      date: new Date(),
    };

    store.add(fullMessage);
    socket.io.emit('message', fullMessage);
    resolve(fullMessage);
  });
}

function patchMessage(id, messageText) {
  return new Promise(async (resolve, reject) =>{
    console.log('ID: '+id);
    //const idParsed = new ObjectId(id);
    if (!id || !messageText){
      reject(`No se encontró el message con el ID:${id}`);
      return false;
    }
    const res = await store.patch(id, messageText);
    resolve(res);
  });
}

function deleteMessage(id) {
  return new Promise( async (resolve, reject) =>{
    if (!id){
      reject(`No se encontró el message con el ID:${id}`);
      return false;
    }

    const messageDeleted = store.delete(id);
    resolve(messageDeleted);
  });
}

module.exports = {
    addMessage,
    getMessages,
    getMessagesByChatId,
    getMessagesByUserId,
    patchMessage,
    deleteMessage, 
};