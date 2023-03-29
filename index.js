const express = require('express');
const cors = require('cors');

const app = express();


app.use(cors());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

app.get('/api/hello/', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.listen(3001, () => {
    console.log('Servidor de Express funcionando en el puerto 3001');
  });