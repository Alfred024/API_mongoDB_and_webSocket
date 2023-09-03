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
    resolve(fullMessage);
  });
}

module.exports = {
    addMessage,
};