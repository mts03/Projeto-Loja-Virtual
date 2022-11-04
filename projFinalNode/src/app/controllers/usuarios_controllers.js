const Usuarios_dao = require('../BD/usuarios_dao'); 
var db = require('../../config/database');

class UsuariosControllers{
    validaAcessoUsuario(){
        return function(req,res){
            const usuarioDAO = new Usuarios_dao(db);
            usuarioDAO.selectNaTabelaUsuarios(req.body.cpf, req.body.senha)
             .then (dados => {
                if (dados > 0){
                    console.log('USUARIO EXISTE!! ESTÁ VALIDADO!');
                    res.redirect('/');
                }
            })
             .catch (erro =>{
                console.log('USUÁRIO NÃO EXISTE!!');
                res.redirect('/login');
            })
        }
    }
    insereNovoUsuario(){
        return function(req, res){
            const usuarioDAO = new Usuarios_dao(db);
            usuarioDAO.incluiUsuarios(req.body)
            .then (res.redirect('/'))
            .catch(erro => console.log(erro)); 
        }
    }
}

module.exports = UsuariosControllers;