let list = [

];

function addMessage_toStorage(message) {
    list.push(message);
}

function getMessages_fromStorage() {
    return list;
}

module.exports = {
    add: addMessage_toStorage,
    getList: getMessages_fromStorage,
};