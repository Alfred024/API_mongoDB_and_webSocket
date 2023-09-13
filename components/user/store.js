const Model = require('./model');
const MessagesUserModel = require('../message/model');

function addUser_toStorage(user) {
    const myUser = new Model(user);
    return myUser.save();
}

async function getUsers_fromStorage(filteruser) {
    let filter = {};
    if (filteruser){
        filter = {user: filteruser}
    }
    const users = await Model.find(filter);
    return users;
}

async function putUser_ofStorage(id, userNewName) {
    const userById = await Model.findById(id);
    userById.name = userNewName;
    const newUser = await userById.save();
    return newUser;
}

async function deleteUser_ofStorage(id) {
    const userToDelete = await Model.findByIdAndDelete(id);

    //Quiero borrar todos los mensajes del usuario cuando este se elimine, la forma que se me ocurrió era pasar 
    //cambiar el modelo de usuario y agregarle un tipo array de mensajes, y ahí ir metiendo los mensajes que vaya
    //creando, o si no 

    console.log(userToDelete);
    return userToDelete;
}

module.exports = {
    add: addUser_toStorage,
    getList: getUsers_fromStorage,
    put: putUser_ofStorage,
    delete: deleteUser_ofStorage,
};