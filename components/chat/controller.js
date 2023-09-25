const store = require('./store');

function addChat(users, chat) {
  return new Promise((resolve, reject) =>{
    if( !users || users.length < 2){
      console.log('origen: addChat \nNo se pasó el usuaroi o mensaje');
      reject('Datos incorrectos');
    }

    const fullChat = {
      chat: chat,
      users: users,
    };

    console.log('fullChat');
    store.add(fullChat);
    resolve(fullChat);
  });
}

function getChats(chatId) {
  return new Promise((resolve, reject)=>{
    if(store.getChats()){
      resolve(store.getChats(chatId));
    }else{
      reject('No fue posible obtener los mensajes');
    }
  });
}


function deleteChat(id) {
  return new Promise( async (resolve, reject) =>{
    if (!id){
      reject(`No se encontró el Chat con el ID:${id}`);
      return false;
    }
    
    const chatDeleted = store.delete(id);
    resolve(chatDeleted);
  });
}

//Método para editar los mensajes de un chat???
// function patchChat(id, ChatText) {
//   return new Promise(async (resolve, reject) =>{
//     console.log('ID: '+id);
//     //const idParsed = new ObjectId(id);
//     if (!id || !ChatText){
//       reject(`No se encontró el Chat con el ID:${id}`);
//       return false;
//     }
//     const res = await store.patch(id, ChatText);
//     resolve(res);
//   });
// }

module.exports = {
    addChat,
    getChats,
    //patchChat,
    deleteChat, 
};