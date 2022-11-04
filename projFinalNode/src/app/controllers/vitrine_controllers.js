const Vitrine_dao = require('../BD/vitrine_dao'); 
var db = require('../../config/database');

class VitrineControllers{
    listaVitrine(){
        return function(req, res){
            const vitrineDAO = new Vitrine_dao(db);
            vitrineDAO.selectNaTabelaVitrine(function(erro, resultados){
                res.marko(
                    require('../views/paginicial.marko'),{
                        vitrine : resultados
                    }
                );
            });
        }
    }
}
module.exports = VitrineControllers;