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

function getMessages() {
  return new Promise((resolve, reject)=>{
    if(store.getList()){
      resolve(store.getList());
    }else{
      reject('No fue posible obtener los mensajes');
    }
  });
}

module.exports = {
    addMessage,
    getMessages,
};