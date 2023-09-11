const store = require('./store');

function addUser(user) {
  return new Promise((resolve, reject) =>{
    if( !user ){
      console.log('origen: addUser \nNo se pasó el usuario');
      reject('Datos incorrectos');
    }

    const fullUser = {
      name: user,
      date: new Date(),
    };

    console.log(fullUser);
    store.add(fullUser);
    resolve(user);
  });
}

function getUsers(filterUser) {
  return new Promise((resolve, reject)=>{
    if(store.getList()){
      resolve(store.getList(filterUser));
    }else{
      reject('No fue posible obtener los mensajes');
    }
  });
}

function patchUser(id, userNewName) {
  return new Promise(async (resolve, reject) =>{
    console.log('ID: '+id);
    //const idParsed = new ObjectId(id);
    if (!id || !userNewName){
      reject(`No se encontró el user con el ID:${id}`);
      return false;
    }
    const res = await store.patch(id, userNewName);
    resolve(res);
  });
}

function deleteUser(id) {
  return new Promise( async (resolve, reject) =>{
    if (!id){
      reject(`No se encontró el user con el ID:${id}`);
      return false;
    }

    const userDeleted = store.delete(id);
    resolve(userDeleted);
  });
}

module.exports = {
    addUser,
    getUsers,
    patchUser,
    deleteUser, 
};