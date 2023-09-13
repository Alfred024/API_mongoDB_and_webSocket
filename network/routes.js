const express = require('express');
const messageRoute = require('../components/message/network');
const userRoute = require('../components/user/network');

function routerApi(server) {
    // const globalRouter = express.Router();
    // server.use('/api_demo/v1', globalRouter);
    // globalRouter.use('/message', messageRoute);
    server.use('/message', messageRoute);
    server.use('/users', userRoute);
}   

module.exports = routerApi;