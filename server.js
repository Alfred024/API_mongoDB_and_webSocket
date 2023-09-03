const express = require('express');
const router = express.Router();
const app = express();

const response = require('./network/response');

app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use(router);

router.get('/message', (req, res) =>{
    try {
        response.succes(req, res, 'Message getted succesfully', 200);
    } catch (error) {
        response.error( req, res, error, 500 );
    }
});

router.delete('/message', (req, res) =>{
    console.log(req.body);
    res.send('Mensaje eliminado ');
});

app.listen(2023, () =>{
    console.log('Server ejecutandose en el puerto local 2023');
});