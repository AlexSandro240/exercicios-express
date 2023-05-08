const express = require('express');
const app = express();

app.use((req, res) => {
    res.send('Olá <b>mundo</b>!');
})

app.listen(3000, () => {
    console.log('Backend Executando...');
})