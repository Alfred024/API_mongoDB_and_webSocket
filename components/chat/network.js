const response = require('../../network/response');
const controller = require('./controller');

const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{

    controller.getChats()
        .then((chats) =>{
            response.succes(req, res, chats, 200);
        })
        .catch((err) =>{
            response.error( req, res, 'Error interno para obtner los mensajes', err, 500 );
        });
});

//Crea un nuevo epsacio de chat
router.post('/', (req, res) =>{
    chat = req.body.chat;
    users = req.body.users;
    controller.addChat(users, chat)
        .then(() =>{
            response.succes(req, res, body, 200);  
        })
        .catch(err =>{
            response.error( req, res, err, 'Error en el controlador', 500 );
        });
});

router.delete('/:id', (req, res) =>{
    const id = req.params.id;
    controller.deleteChat(id)
        .then((messadeDeleted) =>{
            response.succes(req, res, messadeDeleted, 200);
        })
        .catch((err) =>{
            response.error( req, res, 'Error en método DELETE', err, 500 );
        });
});

// router.patch('/:id', (req, res) =>{
//     const {id} = req.params;
//     const messageText = req.body.message;

//     controller.patchMessage(id, messageText)
//         .then((messageUpdated) =>{
//             response.succes(req, res, messageUpdated, 200);  
//         })
//         .catch((err) =>{
//             response.error( req, res, err, 'Error en método PATCH', 500 );
//         });
// });

module.exports = router;