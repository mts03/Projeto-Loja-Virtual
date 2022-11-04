const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bdmat'
});

connection.connect(function(err){
    if(err){
        console.log('ERRO NA CONEXÃO COM O BD BDMAT')
    }
    else
        console.log('CONEXÃO COM BD BDMAT REALIZADA COM SUCESSO!');
});

module.exports = connection;