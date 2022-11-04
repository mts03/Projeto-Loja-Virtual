const Produtos_dao = require('../BD/produtos_dao'); 
var db = require('../../config/database');

class ProdutosControllers{
    listaProduto(){
        return function(req, res){
            const produtosDAO = new Produtos_dao(db);
            produtosDAO.selectNaTabelaProdutos(function(erro, resultados){
                res.marko(
                    require('../views/carrinho.marko'),{
                        produtos : resultados
                    }
                );
            });
        }
    }
}
module.exports = ProdutosControllers;