class Usuarios_dao{
    constructor(db){
        this._db = db;
    }

    selectNaTabelaUsuarios(cpf, senha){
        return new Promise((resolve, reject) => {
            var sqlConsUsuarios = "SELECT * FROM USUARIOS WHERE cpfUsua='" + cpf + "' and senhaUsua='" + senha + "'";
            console.log("SELECT MONTADO = " + sqlConsUsuarios);
            this._db.query(sqlConsUsuarios, function(erro, resultado){
                if(resultado.length > 0){
                    var dados = resultado.length;
                    resolve(dados);
                }
                else{
                    return reject('PROBLEMA NA PROMISE DE SELECT NA TABELA USUARIOS');
                }
            })
        })
    }
    incluiUsuarios(usuario){
        return new Promise((resolve, reject) => {
            var sqlInsUsuario = "INSERT INTO usuarios (cpfUsua, emailUsua, nomeUsua, senhaUsua) VALUES ('" + usuario.cpf + "', '" + usuario.email +"', '" + usuario.nome +"', '"+ usuario.senha +"')";
            console.log("SELECT MONTADO = " + sqlInsUsuario);
            this._db.query(sqlInsUsuario, function(erro, resultado){
                if(erro){
                    console.log(erro);
                    return reject('ERRO NA INCLUSÃO DO NOVO REGISTRO NA TABELA CLIENTES NO BD');
                }
                else{
                    return resolve();
                }
            })
        })
    }
}

module.exports = Usuarios_dao;