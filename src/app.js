import express from 'express';
import db from './config/dbconnect.js';

db.on('error', console.log.bind(console, 'Erro de conexão'))
db.once('open', () => {
    console.log('Conexão com o banco feita com sucesso!')
})

const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send('API maumau');
}) 

export default app