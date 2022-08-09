const express = require('express');
const mysql = require('mysql');
const app = express();

const conexao = mysql.createConnection({
    user : 'root', 
    host : 'localhost',
    database : 'pedidos'
});

app.use(express.json());

app.get('/pedidos',(req, res)=>{
    let id = req.query.id
    let priNome = req.query.priNome
    let sobrenome =req.query.Sobrenome
    let endereco = req.query.Endereco
    let telefones = req.query.Telefones
    let string = `insert into clientes values('${id}', '${priNome}','${sobrenome}','${endereco}')`;
    let int = `insert into telefones values('${id}', '${telefones}')`;
    conexao.query(string,(err, result)=>{
        if(err == null){
            res.json("Dados recebidos com sucesso, estamos enviando ao nosso Banco de Dados");
        } else{
            res.json("Dados recebidos com sucesso, Mai num foi. Erro: " + err);
        }
    });
});

app.get('/pedidos',(req, res)=>{
    let id = req.query.id
    let telefones = req.query.Telefones
    let string = `insert into telefones values('${id}', '${telefones}')`;
    conexao.query(string,(err, result)=>{
        if(err == null){
            res.json("Dados recebidos com sucesso, estamos enviando ao nosso Banco de Dados");
        } else{
            res.json("Dados recebidos com sucesso, Mai num foi. Erro: " + err);
        }
    });
});

app.listen(3000,()=>{
    console.log("Respondendo na porta 3000");
});