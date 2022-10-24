const express = require('express');
const app = express();

app.use(express.json());

app.get('/pedidos',(req, res)=>{
    res.json("Boas");
});

app.listen(3000,()=>{
    console.log("Respondendo na porta 3000");
});