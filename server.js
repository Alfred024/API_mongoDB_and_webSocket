const express = require('express');
const router = express.Router();
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use(router);

router.get('/message', (req, res) =>{
    res.send('Lista de msjs');
});

router.delete('/message', (req, res) =>{
    console.log(req.body);
    res.send('Mensaje eliminado ');
});

app.listen(2023, () =>{
    console.log('Server ejecutandose en el puerto local 2023');
});