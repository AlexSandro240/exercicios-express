const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const saudacao = require('./saudacaoMid'); 

const usuarioApi = require('./api/usuario');

app.post('/usuario', usuarioApi.salvar);
app.get('/usuario', usuarioApi.obter);


app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(saudacao('Sandro'));

app.use((req, res, next) => {
    console.log('Antes...');
    next();
});

app.get('/clientes/relatorio', (requisicao, resposta) => {
    res.send(`Cliente relatorio: completo = ${req.query.completo} ano = ${req.query.ano}`)
});

app.post('/corpo', (req, res) => {
    // let corpo = ''
    // req.on('data', function(parte){
    //     corpo += parte
    // })

    // req.on('end', function(){
    //     res.send(corpo)
    // })

    res.send(req.body)
});

app.get('cliente/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado`)
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