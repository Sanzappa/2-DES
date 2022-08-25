const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'pedidos'
});

app.get('/', (req, res) => {
    let string = `Select * from clientes`;
    con.query(string,(err, result)=>{
        if(err == null){
            res.json(result);
        }
    });
});

app.listen(5000, () => {
    console.log("Respondendo na porta 5000");
});