const store = require('./store');

function getUsers(filterUser) {
  return new Promise((resolve, reject)=>{
    if(store.getList()){
      resolve(store.getList(filterUser));
    }else{
      reject('No fue posible obtener los mensajes');
    }
  });
}

function addUser(name) {
  if( !name ){
    console.log('origen: addUser \nNo se pasó el usuario');
    return Promise.reject('Datos incorrectos');
  }

  const fullUser = {
    name,
  };
  
  return store.add(fullUser);
}

function putUser(id, userNewName) {
  return new Promise(async (resolve, reject) =>{
    console.log('ID: '+id);
    //const idParsed = new ObjectId(id);
    if (!id || !userNewName){
      reject(`No se encontró el user con el ID:${id}`);
      return false;
    }
    const res = await store.put(id, userNewName);
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
    putUser,
    deleteUser, 
};