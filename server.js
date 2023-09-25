const express = require('express');
const app = express();
const server = require('http').Server(app);
const socket = require('./socket');
const router = require('./network/routes');
const {connectToMongo, MONGO_URI} = require('./db');
connectToMongo(MONGO_URI);

app.use(express.json());
app.use(express.urlencoded({extended : false}));
socket.connectToSocket(server);
router(app);

app.use('/app', express.static('public'));

server.listen(2023, () =>{
    console.log('Server ejecutandose en el puerto local 2023');
});