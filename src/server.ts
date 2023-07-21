import dotenv from 'dotenv';
import app from './app';
dotenv.config();

const PORT = process.env.PORT || 5000;

//Iniciar servidor
app.listen(PORT, () => console.log(`Rodando na porta: ${PORT}`));