const express = require('express');
 
import userController from "../controller/userController";

//Instancia o express na variável app
//const app = express()
//Para express utilizar o JSON
//app.use(express.json());

const router = express.Router();

//Listar registros
router.get('/users', userController.listUsers);

//Cadastrar usuario
router.post('/users', userController.cUsers);

//Editar usuario
router.put('/user/:id', userController.eUsers);

router.delete('/user/:id', userController.dUsers);

export default router;