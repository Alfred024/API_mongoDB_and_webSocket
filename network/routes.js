const express = require('express');
const messageRoute = require('../components/message/network');
const userRoute = require('../components/user/network');
const chatsRoute = require('../components/chat/network');

function routerApi(server) {
    // const globalRouter = express.Router();
    // server.use('/api_demo/v1', globalRouter);
    // globalRouter.use('/message', messageRoute);
    server.use('/messages', messageRoute);
    server.use('/users', userRoute);
    server.use('/chats', chatsRoute);
}   

module.exports = routerApi;