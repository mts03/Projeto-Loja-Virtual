const aplicacao = require("../../config/express");
const UsuarioControlador = require('../controllers/usuarios_controllers');
const usuarioCont = new UsuarioControlador();

const ProdutoControlador = require('../controllers/produtos_controllers');
const produtoCont = new ProdutoControlador();

const VitrineControlador = require('../controllers/vitrine_controllers');
const vitrineCont = new VitrineControlador();


module.exports = (aplicacao) => {

    aplicacao.use((req, res, next) => {
        res.header('Acess-Control-Allow-Origin', '*');
        res.header('Acess-Control-Allow-Origin', "http://localhost");
        res.header('Acess-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
        res.header('Acess-Control-Allow-Headers', 'Content-Type');
        next();
    });

    // ROTAS
    
    aplicacao.get('/', vitrineCont.listaVitrine())
        console.log("Acessou a página de ACESSO a aplicação...");

    aplicacao.get('/clientes', function(req, res){
        console.log('Acessou a rota para a listagem de clientes');
    })

    aplicacao.get('/login', function(req, res){
        res.marko(
            require('../views/login.marko'));
        console.log("Acessou a rota para pagina de login.");
    })

    aplicacao.get('/cadastro', function(req, res){
        res.marko(
            require('../views/cadastro.marko'));
        console.log("Acessou a rota para pagina de cadastro.");
    })

    aplicacao.get('/sobre', function(req, res){
        res.marko(
            require('../views/sobre.marko'));
        console.log("Acessou a rota para a aba sobre.");
    })

    aplicacao.get('/carrinho', produtoCont.listaProduto());
        console.log("Acessou a rota para o carrinho.");

    aplicacao.post('/validaBDUsuarios', usuarioCont.validaAcessoUsuario());

    aplicacao.post('/insertBDClientes', usuarioCont.insereNovoUsuario());
}