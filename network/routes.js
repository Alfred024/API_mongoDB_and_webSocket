const express = require('express');
const messageRoute = require('../components/messages/network');

function routerApi(server) {
    // const globalRouter = express.Router();
    // server.use('/api_demo/v1', globalRouter);
    // globalRouter.use('/message', messageRoute);
    server.use('/message', messageRoute);
}   

module.exports = routerApi;