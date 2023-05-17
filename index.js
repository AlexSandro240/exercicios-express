const express = require('express');
const app = express();

const saudacao = require('./saudacaoMid'); 

app.use(saudacao('Sandro'));

app.use((req, res, next) => {
    console.log('Antes...');
    next();
});

app.get((req, res, next) => {
    console.log('durante...');
    res.json({
        data: [
            {id:7, name: 'Ana', position: 1},
            {id:79, name: 'Claudia', position: 2},
            {id:13, name: 'Paula', position: 3}
        ],
        count: 30,
        skip:0,
        limit: 3,
        status: 200
    });

    next();

    // res.json({
    //     name: 'Playstation 5', 
    //     price: 5000.00,
    //     discount: 0
    // });

    // res.send('<b>Olá mundo </b>');
})

app.use((res, req) => {
    console.log('Depois...'); 
}); //nesse caso, como é uma ultima função e não há porque passar pra outra, então não precisa da função next()

app.listen(3000, () => {
    console.log('Backend Executando...');
})