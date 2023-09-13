const store = require('./store');

function addMessage(user, message) {
  return new Promise((resolve, reject) =>{
    if( !user || !message){
      console.log('origen: addMessage \nNo se pasó el usuaroi o mensaje');
      reject('Datos incorrectos');
    }

    const fullMessage = {
      user: user,
      message: message,
      date: new Date(),
    };

    console.log(fullMessage);
    store.add(fullMessage);
    resolve(fullMessage);
  });
}

function getMessages(filterUser) {
  return new Promise((resolve, reject)=>{
    if(store.getList()){
      resolve(store.getList(filterUser));
    }else{
      reject('No fue posible obtener los mensajes');
    }
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
    patchMessage,
    deleteMessage, 
};