const express = require('express');
const router = require('./network/routes');
const db = require('./db');

//Variables de entorno
const {config} = require('./config/config');
const USER = encodeURIComponent(config.db_user);
const PASSWORD = encodeURIComponent(config.db_password);
const DB_NAME = encodeURIComponent(config.db_name);
const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.db_host}/${DB_NAME}?retryWrites=true&w=majority`;
db(MONGO_URI);

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : false}));

router(app);

app.listen(2023, () =>{
    console.log('Server ejecutandose en el puerto local 2023');
});