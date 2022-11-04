class Vitrine_dao{
    constructor(db){
        this._db = db;
    }
    selectNaTabelaVitrine(callback){
        var sqlConsVitrine = "SELECT idProdVitrine, descricaoProdVitrine,fotoProdVitrine, precoProdVitrine FROM vitrine";
        console.log(sqlConsVitrine);
        this._db.query(sqlConsVitrine, (erro, resultados) =>
        callback(erro, resultados));
    }
}
module.exports = Vitrine_dao;