const db = require('mongoose');

//Variables de entorno
const {config} = require('./config/config');
const USER = encodeURIComponent(config.db_user);
const PASSWORD = encodeURIComponent(config.db_password);
const DB_NAME = encodeURIComponent(config.db_name);
const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.db_host}/${DB_NAME}?retryWrites=true&w=majority`;

async function connectToMongo( MONGO_URI ) {
    await db.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: DB_NAME,
    });
    
    console.log('Conexión a MongoDB exitosa');
}

module.exports = {connectToMongo, MONGO_URI};