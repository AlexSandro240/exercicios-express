const express = require('express');
const app = express();

app.use((req, res) => {
    res.send('Olá mundo');
})

app.listen(3000, () => {
    console.log('Backend Executando...');
})