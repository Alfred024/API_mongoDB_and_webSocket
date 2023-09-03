const express = require('express');

const app = express();

app.use('/', function (req, res) {
    res.send('Usando express!! :D');
});

app.listen(2023, () =>{
    console.log('Server ejecutandose en el puerto local 2023');
});