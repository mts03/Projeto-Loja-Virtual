class Produtos_dao{
    constructor(db){
        this._db = db;
    }
    selectNaTabelaProdutos(callback){
        var sqlConsProdutos = "SELECT idProduto, descricaoProduto, precoProduto FROM produtos";
        console.log(sqlConsProdutos);
        this._db.query(sqlConsProdutos, (erro, resultados) =>
        callback(erro, resultados));
    }
}
module.exports = Produtos_dao;