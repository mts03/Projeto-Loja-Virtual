require('marko/node-require').install();
require('marko/express');
const express    = require('express');
const aplicacao  = express();

const bodyParser = require('body-parser');
aplicacao.use(bodyParser.urlencoded({
    extended: true
}));

const rotas = require('../app/rotas/rotas');
rotas(aplicacao);

aplicacao.use('/estatico', express.static('src/app/views'));

module.exports = aplicacao;