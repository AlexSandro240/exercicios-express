const express = require('express');
const app = express();

app.use((req, res) => {
    res.send('Olá');
})

app.listen(3000, () => {
    console.log('Backend Executando...');
})