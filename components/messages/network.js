const response = require('../../network/response');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    try {
        response.succes(req, res, 'Message getted succesfully', 200);
    } catch (error) {
        response.error( req, res, 'Error interno para obtner los mensajes', error, 500 );
    }
});

router.delete('/', (req, res) =>{
    console.log(req.body);
    res.send('Mensaje eliminado ');
});

module.exports = router;