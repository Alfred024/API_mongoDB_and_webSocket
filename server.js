const express = require('express');
const router = require('./network/routes');
const {connectToMongo, MONGO_URI} = require('./db');
connectToMongo(MONGO_URI);

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : false}));

router(app);

app.listen(2023, () =>{
    console.log('Server ejecutandose en el puerto local 2023');
});