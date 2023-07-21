//Importar o pacote File System para manipular arquivos
const fs = require('fs');
//Importar banco de dados de extensão .json
const data: string = './database.json';

import { Request, Response} from "express"
async function listUsers(req: Request, res: Response) {
    const jsonData = fs.readFileSync(data);
    //analisa string 
    res.send(JSON.parse(jsonData));
}

export default {
    listUsers
}