const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'academia'
});

app.get('/academia/alunos', (req, res) => {
    let string = `Select * from vw_clientes`;
    con.query(string,(err, result)=>{
        if(err == null){
            res.json(result);
        }
    });
});

app.get('/academia/aparelhos', (req, res) => {
    let string = `Select * from aparelhos`;
    con.query(string,(err, result)=>{
        if(err == null){
            res.json(result);
        }
    });
});

app.get('/academia/exercicios', (req, res) => {
    let string = `Select * from exercicios`;
    con.query(string,(err, result)=>{
        if(err == null){
            res.json(result);
        }
    });
});

app.get('/academia/fichas', (req, res) => {
    let string = `Select * from fichas`;
    con.query(string,(err, result)=>{
        if(err == null){
            res.json(result);
        }
    });
});

app.listen(5000, () => {
    console.log("Respondendo na porta 5000");
});