const response = require('../../network/response');
const controller = require('./controller');

const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    const filterMessages = req.query.user || null;

    controller.getUsers(filterMessages)
        .then((usersList) =>{
            response.succes(req, res, usersList, 200);
        })
        .catch((err) =>{
            response.error( req, res, 'Error interno para obtner los mensajes', err, 500 );
        });
});


router.post('/', (req, res) =>{
    body = req.body;
    console.log(body);
    controller.addUser(body.user)
        .then(() =>{
            response.succes(req, res, user, 200);  
        })
        .catch(err =>{
            response.error( req, res, err, 'Error en el controlador', 500 );
        });
});

router.patch('/:id', (req, res) =>{
    const {id} = req.params;
    const messageText = req.body.message;

    controller.patchUser(id, messageText)
        .then((messageUpdated) =>{
            response.succes(req, res, messageUpdated, 200);  
        })
        .catch((err) =>{
            response.error( req, res, err, 'Error en método PATCH', 500 );
        });
});

router.delete('/:id', (req, res) =>{
    const id = req.params.id;
    controller.deleteUser(id)
        .then((messadeDeleted) =>{
            response.succes(req, res, messadeDeleted, 200);
        })
        .catch((err) =>{
            response.error( req, res, 'Error en método DELETE', err, 500 );
        });
});

module.exports = router;