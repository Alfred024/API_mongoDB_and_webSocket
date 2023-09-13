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
    this.name = req.body.name;
    controller.addUser(this.name)
        .then((user) =>{
            response.succes(req, res, user, 200);  
        })
        .catch(err =>{
            response.error( req, res, err, 'Error en el controlador', 500 );
        });
});

router.put('/:id', (req, res) =>{
    const {id} = req.params;
    const name = req.body.new_name;

    controller.putUser(id, name)
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
        .then((userDeleted) =>{
            response.succes(req, res, userDeleted, 200);
        })
        .catch((err) =>{
            response.error( req, res, 'Error en método DELETE', err, 500 );
        });
});

module.exports = router;