const Model = require('./model');

function addUser_toStorage(user) {
    const myUser = new Model(user);
    myUser.save();
}

async function getUsers_fromStorage(filteruser) {
    let filter = {};
    if (filteruser){
        filter = {user: filteruser}
    }
    const users = await Model.find(filter);
    return users;
}

async function patchUser_ofStorage(id, userText) {
    const UserById = await Model.findById(id);
    UserById.user = userText;
    const newUser = await UserById.save();
    return newUser;
}

async function deleteUser_ofStorage(id) {
    const userToDelete = await Model.findByIdAndDelete(id);;
    console.log(userToDelete);
    
    //Model.deleteOne({_id: id});
    return userToDelete;
}

module.exports = {
    add: addUser_toStorage,
    getList: getUsers_fromStorage,
    patch: patchUser_ofStorage,
    delete: deleteUser_ofStorage,
};