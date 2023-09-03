const express = require('express');
const router = require('./network/routes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : false}));

router(app);

app.listen(2023, () =>{
    console.log('Server ejecutandose en el puerto local 2023');
});